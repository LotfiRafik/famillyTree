import { useEffect } from 'react';
import * as d3 from 'd3';
import './tree.css';

function App() {

    const root = {
        "id": 0,
        "name": "BOUCHAFA LAMRI",
        "children": [
            {
                "name": "Ahmed",
                "id": 1,
                "children": [
                    {
                        "name": "Saadi",
                        "id": 6,
                        "children": [
                            { "name": "Abdelkerim", "id": 19 },
                            { "name": "Daoud", "id": 20 },
                            { "name": "Abdelmadjid", "id": 21 }
                        ]
                    },
                    {
                        "name": "Sherif",
                        "id": 7,
                        "children": [
                            { "name": "Zayneb", "id": 22 },
                            { "name": "Bahdja", "id": 23 },
                            {
                                "name": "Ahmed",
                                "id": 24,
                                "children": [
                                    { "name": "Zahiya", "id": 59 },
                                    { "name": "Bakka", "id": 60 },
                                    { "name": "Tata", "id": 61 },
                                    { "name": "Akila", "id": 62 },
                                    {
                                        "name": "Cherif",
                                        "id": 63,
                                        "children": [
                                            { "name": "Hafid", "id": 65 },
                                            { "name": "Nassim", "id": 66 },
                                            { "name": "Samia", "id": 67 }
                                        ]
                                    },
                                    { "name": "Ajja", "id": 64 }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Mokrane",
                        "id": 8,
                        "children": [
                            {
                                "name": "Rachid",
                                "id": 25,
                                "children": [
                                    { "name": "Imene", "id": 68 },
                                    { "name": "Kenza", "id": 69 },
                                    { "name": "Mokrane", "id": 70 },
                                    { "name": "Ilyes", "id": 71 }
                                ]
                            },
                            { "name": "Nouara", "id": 26 },
                            { "name": "Nedjma", "id": 27 },
                            {
                                "name": "Lyazid",
                                "id": 28,
                                "children": [
                                    { "name": "IMAD EDDINE ", "id": 72 },
                                    { "name": "Lotfi-Rafik", "id": 73 },
                                    { "name": "RAYAN ", "id": 74 }
                                ]
                            },
                            {
                                "name": "Boubeker",
                                "id": 29,
                                "children": [{ "name": "Hichem", "id": 75 }]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Mouloud-Belcourt",
                "id": 2,
                "children": [
                    { "name": "Omar", "id": 9 },
                    { "name": "Rabeh", "id": 10 },
                    { "name": "Abdelkader", "id": 11 },
                    { "name": "Mohammed", "id": 12 }
                ]
            },
            {
                "name": "LARBI",
                "id": 3,
                "children": [
                    {
                        "name": "Hasan",
                        "id": 13,
                        "children": [
                            {
                                "name": "Belkacem",
                                "id": 30,
                                "children": [
                                    { "name": "Jaber", "id": 76 },
                                    { "name": "Badr", "id": 77 },
                                    { "name": "Kamal", "id": 78 },
                                    { "name": "Abdelrahim", "id": 79 },
                                    { "name": "Karima", "id": 80 },
                                    { "name": "Safia", "id": 81 },
                                    { "name": "Oussama", "id": 82 },
                                    { "name": "Ouiza", "id": 83 },
                                    { "name": "Asma", "id": 84 },
                                    { "name": "Soufiane", "id": 85 },
                                    { "name": "Rafika", "id": 86 }
                                ]
                            },
                            {
                                "name": "Tayab",
                                "id": 31,
                                "children": [
                                    { "name": "Hassan", "id": 87 },
                                    { "name": "Sidali", "id": 88 },
                                    { "name": "Nabila", "id": 89 },
                                    { "name": "Siham", "id": 90 },
                                    { "name": "Hayat", "id": 91 },
                                    { "name": "Nadira", "id": 92 },
                                    { "name": "Radia", "id": 93 }
                                ]
                            },
                            {
                                "name": "Abdelhamid",
                                "id": 32,
                                "children": [
                                    { "name": "Reda", "id": 94 },
                                    { "name": "Amal", "id": 95 },
                                    { "name": "Ilias", "id": 96 },
                                    { "name": "Nawal", "id": 97 },
                                    { "name": "Lila", "id": 98 }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Abdelrahmane",
                        "id": 14,
                        "children": [
                            { "name": "Jamila", "id": 33 },
                            {
                                "name": "Larbi",
                                "id": 34,
                                "children": [
                                    { "name": "Fadila", "id": 99 },
                                    { "name": "Salima", "id": 100 },
                                    { "name": "Sabiha", "id": 101 },
                                    { "name": "Yamina", "id": 102 },
                                    { "name": "Farid", "id": 103 },
                                    { "name": "Noureddine", "id": 104 },
                                    { "name": "Hamida", "id": 105 },
                                    { "name": "Azzeddine", "id": 106 },
                                    { "name": "Yasmina", "id": 107 },
                                    { "name": "Jamal", "id": 108 }
                                ]
                            },
                            {
                                "name": "Amar",
                                "id": 35,
                                "children": [
                                    { "name": "Othmane", "id": 109 },
                                    { "name": "Abderlrahmane", "id": 110 },
                                    { "name": "Dalloula", "id": 111 },
                                    { "name": "Baya", "id": 112 },
                                    { "name": "Naima", "id": 113 }
                                ]
                            },
                            { "name": "Baya", "id": 36 }
                        ]
                    },
                    {
                        "name": "Abdallah",
                        "id": 15,
                        "children": [
                            { "name": "Hadjila", "id": 37 },
                            {
                                "name": "Mustapha",
                                "id": 38,
                                "children": [
                                    { "name": "Abdellah", "id": 114 },
                                    { "name": "Melissa", "id": 115 },
                                    { "name": "Sabrina", "id": 116 }
                                ]
                            },
                            { "name": "Magdouda", "id": 39 },
                            {
                                "name": "Abbas",
                                "id": 40,
                                "children": [
                                    { "name": "Meriem", "id": 117 },
                                    { "name": "Farah", "id": 118 },
                                    { "name": "Nassima", "id": 119 }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Mohammed",
                        "id": 16,
                        "children": [
                            {
                                "name": "Lamri",
                                "id": 41,
                                "children": [
                                    { "name": "Amir", "id": 120 },
                                    { "name": "Idir", "id": 121 },
                                    { "name": "Wahiba", "id": 122 },
                                    { "name": "Marwan", "id": 123 },
                                    { "name": "Selma", "id": 124 },
                                    { "name": "Maya", "id": 125 }
                                ]
                            },
                            {
                                "name": "Khaled",
                                "id": 42,
                                "children": [
                                    { "name": "Abdulkarim", "id": 126 },
                                    { "name": "Abdulhalim", "id": 127 },
                                    { "name": "Zakaria", "id": 128 }
                                ]
                            },
                            {
                                "name": "Elhachemi",
                                "id": 43,
                                "children": [
                                    { "name": "Soumayya", "id": 129 },
                                    { "name": "Mohammed", "id": 130 }
                                ]
                            },
                            { "name": "Fettouma", "id": 44 },
                            { "name": "Zakaria", "id": 45 },
                            { "name": "Nadia", "id": 46 },
                            { "name": "Wahiba", "id": 47 },
                            { "name": "Aiacha", "id": 48 },
                            { "name": "Leila", "id": 49 },
                            { "name": "Ratiba", "id": 50 }
                        ]
                    }
                ]
            },
            {
                "name": "Said",
                "id": 4,
                "children": [
                    {
                        "name": "Mohammed",
                        "id": 17,
                        "children": [
                            { "name": "Said", "id": 51 },
                            { "name": "Mustapha", "id": 52 },
                            { "name": "Hassan", "id": 53 }
                        ]
                    }
                ]
            },
            {
                "name": "Bouchadra",
                "id": 5,
                "children": [
                    {
                        "name": "Tahar",
                        "id": 18,
                        "children": [
                            { "name": "Saleh", "id": 54 },
                            { "name": "Ounisah", "id": 55 },
                            { "name": "Rquqiya", "id": 56 },
                            { "name": "Fatimah", "id": 57 },
                            {
                                "name": "Arezki",
                                "id": 58,
                                "children": [
                                    { "name": "Mokhtar", "id": 131 },
                                    { "name": "Saleh", "id": 132 },
                                    { "name": "Malika", "id": 133 },
                                    { "name": "Hassina", "id": 134 },
                                    { "name": "Tahar", "id": 135 },
                                    { "name": "Youcef", "id": 136 }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    useEffect(() => {
        /* eslint-disable */

        let margin = {
        top: 20,
        right: 120,
        bottom: 20,
        left: 120
        },
        width = 960 - margin.right - margin.left,
        height = 800 - margin.top - margin.bottom;
        
        let i = 0,
            duration = 0,
            rectW = 80,
            rectH = 45;

        let tree = d3.layout.tree().nodeSize([70, 40]);

        let diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y + rectH / 2, d.x + rectW / 2];
            });

        let svg = d3.select("g")


        root.x0 = 0;
        root.y0 = height / 2;

        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }

        }

        root.children.forEach(collapse);
        update(root);

        function update(source) {

            // Compute the new tree layout.
            let nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            let nbNodesPerDepth = {};

            // Normalize for fixed-depth.
            nodes.forEach(function (d) {
                d.y = d.depth * 180;
                nbNodesPerDepth[d.depth] = nbNodesPerDepth[d.depth] ? nbNodesPerDepth[d.depth] + 1 : 1
                // @TODO optimize calcul
                // max depth
                // max x
                // min x
                // max y
            });
            let min_x = 0;
            let max_depth = Math.max.apply(Math, nodes.map(function (d) { return d.depth; }))
            if (max_depth) {

                let nb_nodes_minus_root = nodes.length - 1

                let max_x = Math.max.apply(Math, nodes.map(function (d) { return d.x; }))
                min_x = Math.min.apply(Math, nodes.map(function (d) { return d.x; }))

                let min_max_x = max_x + Math.abs(min_x) + rectH * 2


                let max_y = Math.max.apply(Math, nodes.map(function (d) { return d.y; }))
                let max_y_depth = (180 * max_depth) + (max_depth * rectW) + rectH

                document.getElementsByTagName("svg")[0].style.width = max_y_depth + "px";
                document.getElementsByTagName("svg")[0].style.height = min_max_x + "px";

                document.getElementsByTagName("g")[0].style.transform = "translate(" + 0 + "px," + Math.abs(min_x) + "px)";

            } else {
                document.getElementsByTagName("svg")[0].style.width = 200 + "px";
                document.getElementsByTagName("svg")[0].style.height = 200 + "px";
                document.getElementsByTagName("g")[0].style.transform = "translate(" + 1 + "px," + 1 + "px)";
            }


            // Update the nodes…
            let node = svg.selectAll("g.node")
                .data(nodes, function (d) {
                    return d.id;
                });


            // Enter any new nodes at the parent's previous position.
            let nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on("click", click);

            nodeEnter.append("rect")
                .attr("width", rectW)
                .attr("height", rectH)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            nodeEnter.append("text")
                .attr("x", rectW / 2)
                .attr("y", rectH / 2)
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .text(function (d) {
                    return d.name;
                });

            // Transition nodes to their new position.
            let nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            nodeUpdate.select("rect")
                .attr("width", rectW)
                .attr("height", rectH)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            let nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

            nodeExit.select("rect")
                .attr("width", rectW)
                .attr("height", rectH)
                .attr("stroke", "black")
                .attr("stroke-width", 1);

            nodeExit.select("text");

            // Update the links…
            let link = svg.selectAll("path.link")
                .data(links, function (d) {
                    return d.target.id;
                });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("x", rectW / 2)
                .attr("y", rectH / 2)
                .attr("d", function (d) {
                    let o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition().duration(duration)
                .attr("d", function (d) {
                    let o = {
                        x: source.x,
                        y: source.y
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            window.scrollTo({
                top: source.x + Math.abs(min_x) + rectH - window.innerHeight / 2,
                left: source.y,
                behavior: 'auto'
            });

        }

        // Toggle children on click.
        function click(d) {

            console.log(this)
            console.log(d)
            if (d.children) {
                collapse(d)
                // d._children = d.children;
                // d.children = null;
            } else if (d._children) {
                d.children = d._children;
                d._children = null;
            }
            else {
                return;
            }
            update(d);

        }

        //Redraw for zoom
        function redraw() {
            console.log("here", d3.event.translate, d3.event.scale);
            svg.attr("transform",
                "translate(" + d3.event.translate + ")"
                + " scale(" + d3.event.scale + ")");
        }
        
    }, []);





    // ******* JSX RENDERING *******

    return (
        <svg>
        <g/>
        </svg>
    );

}

export default App;
