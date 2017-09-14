// Tasks:
// document.getElementById
// Find just the title
// Change the text of the title
// Change the style of the title
// Add a class to the title


// document.addEventListener('DOMContentLoaded', function() {
//   var title = document.getElementById('title');
//   title.textContent = "I just changed!";
//   title.style = "color: blue;"
//   title.className = 'princess-font'
//   var colors=['red', 'pink', 'blue', 'teal', 'aqua', 'orange', 'yellow', 'lime']
//   var i=0;
//   title.addEventListener('click', changeTitleColor)
//   function changeTitleColor (){
//       title.style.color = colors[i]
//       i++;
//     }
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
var lis = document.querySelectorAll('li')
  // console.log(lis)
  for (var i = 0; i < lis.length; i++) {

    var li = lis[i]
    li.addEventListener('click', function(event){
      console.log("I am clicking on a li", event.target);
      event.target.style.color = "orange"
      event.target.className += "selected"
      let selected = document.querySelectorAll(".selected")
      var myItems = ''
      for (var j = 0; j < selected.length; j++) {
        myItems += selected[j].textContent.trim() + " "
      }
      document.querySelector('.alert.alert-info span').textContent = myItems
    })
  }

})


// element.remove()
// Find and remove specific items
