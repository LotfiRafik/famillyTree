const { constants } = require("buffer");
const { parse } = require("csv-parse");
const fs = require("fs");

let root = {
  id: 0,
  name: "LAMRI BOUCHAFA",
};

let records = [];

fs.readFile("./familytree.csv", "utf8", function (err, data) {
  // Display the file content
  // Initialize the parser
  console;
  parse(
    data,
    {
      delimiter: ",",
    },
    function (err, result) {
      if (err) console.log(err);
      records = result;
      fetchChildren(root);
      console.log(JSON.stringify(root));
    }
  );
});

function fetchChildren(root) {
  let childrenRecords = [];
  records.forEach((record) => {
    if (parseInt(record[1]) == root.id) {
      childrenRecords.push({
        name: record[2],
        id: parseInt(record[0]),
      });
    }
  });

  if (childrenRecords.length) {
    root.children = childrenRecords;

    childrenRecords.forEach((child) => {
      fetchChildren(child);
    });
  }

  //   return JSON.stringify(childrenRecords);
}
