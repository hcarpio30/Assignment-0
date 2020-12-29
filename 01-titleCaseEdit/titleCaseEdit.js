function titleCaseEdit(title) {
  var separation = title.split(' ');

    for(i in separation){
      separation[i] = separation[i].charAt(0).toUpperCase() + separation[i].substring(1);
    }

    title=separation.join(' ');
     return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;