import { Component, OnInit, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-skill-bubble-chart',
  templateUrl: './skill-bubble-chart.component.html',
  styleUrls: ['./skill-bubble-chart.component.sass']
})
export class SkillBubbleChartComponent implements OnInit {
  @Input() data: any[];
  width = 500;
  height = 500;
  isMobile = false;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    if (this.isMobile) {
      this.width = 350;
      this.height = 500;
    }

    this.genChart();
  }

  genChart() {
    const self = this;
    const padding = 1.5; // separation between same-color nodes
    const clusterPadding = 6; // separation between different-color nodes
    const maxRadius = 12;

    const color = d3.scale.ordinal().range(['#ea9de8', '#ea9d11', '#9dceea', '#ee7189']);

    function contain(v, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === v) {
          return true;
        }
      }
      return false;
    }

    d3.text('/assets/data/skill.csv', (error, text) => {
      if (error) {
        throw error;
      }
      const colNames = 'text,size,group\n' + text;
      const data = d3.csv.parse(colNames);

      data.forEach((d) => {
        d.size = +d.size;
      });

      // unique cluster/group id's
      const cs = [];
      data.forEach(d => {
        if (!contain(d.group, cs)) {
          cs.push(d.group);
        }
      });

      const n = data.length; // total number of nodes
      const m = cs.length; // number of distinct clusters

      // create clusters and nodes
      const clusters = new Array(m);
      const nodes = [];
      for (let i = 0; i < n; i++) {
        nodes.push(create_nodes(data, i));
      }

      const force = d3.layout
        .force()
        .nodes(nodes)
        .size([this.width, this.height])
        .gravity(0.05)
        .charge(0)
        .on('tick', tick)
        .start();

      const svg = d3
        .select('svg')
        .attr('width', this.width)
        .attr('height', this.height);

      const node = svg
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('g')
        .call(force.drag);

      node
        .append('circle')
        .style('fill', d => {
          return color(d.cluster);
        })
        .attr('r', d => {
          return d.radius;
        });

      node
        .append('text')
        .attr('dy', '.3em')
        .style('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', 'white')
        .text(d => d.text);

      function create_nodes(data, node_counter) {
        const i = cs.indexOf(data[node_counter].group);
        const r =
          Math.sqrt(((i + 1) / m) * -Math.log(Math.random())) * maxRadius;
        const d = {
          cluster: i,
          radius: data[node_counter].size * 2,
          text: data[node_counter].text,
          x: Math.cos((i / m) * 2 * Math.PI) * 200 + self.width / 2 + Math.random(),
          y: Math.sin((i / m) * 2 * Math.PI) * 200 + self.height / 2 + Math.random()
        };
        if (!clusters[i] || r > clusters[i].radius) {
          clusters[i] = d;
        }
        return d;
      }

      function tick(e) {
        node
          .each(cluster(10 * e.alpha * e.alpha))
          .each(collide(0.5))
          .attr('transform', function(d) {
            const k = 'translate(' + d.x + ',' + d.y + ')';
            return k;
          });
      }

      // Move d to be adjacent to the cluster node.
      function cluster(alpha) {
        return d => {
          const cluster = clusters[d.cluster];
          if (cluster === d) {
            return;
          }
          let x = d.x - cluster.x;
          let y = d.y - cluster.y;
          let l = Math.sqrt(x * x + y * y);
          const r = d.radius + cluster.radius;
          if (l !== r) {
            l = ((l - r) / l) * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            cluster.x += x;
            cluster.y += y;
          }
        };
      }

      // Resolves collisions between d and all other circles.
      function collide(alpha) {
        const quadtree = d3.geom.quadtree(nodes);
        return function(d) {
          const r = d.radius + maxRadius + Math.max(padding, clusterPadding);
          const nx1 = d.x - r;
          const nx2 = d.x + r;
          const ny1 = d.y - r;
          const ny2 = d.y + r;
          quadtree.visit(function(quad, x1, y1, x2, y2) {
            if (quad.point && quad.point !== d) {
              let x = d.x - quad.point.x;
              let y = d.y - quad.point.y;
              let l = Math.sqrt(x * x + y * y);
              const r =
                d.radius +
                quad.point.radius +
                (d.cluster === quad.point.cluster ? padding : clusterPadding);
              if (l < r) {
                l = ((l - r) / l) * alpha;
                d.x -= x *= l;
                d.y -= y *= l;
                quad.point.x += x;
                quad.point.y += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          });
        };
      }
    });
  }
}
