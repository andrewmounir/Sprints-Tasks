// array of notes written
var notesList = [];
var num = 0;
var container,
  completed = 0,
  notDone = 0;
var marked = false;
var strikeThrough = false;

console.log(completed);
// change to light/dark mode button
$(".themeChanger").click(function () {
  if ($(".header1").has(".lightDark")) {
    $(".header1").toggleClass("lightDark");
  }
});
// submit action button
$(".submit1").click(function () {
  marked = false;
  if ($(".input1").val().length == 0) {
    //$(".input1").val("Input something ");
    alert("input something");
  } else {
    submitNote(marked);
  }
  $(".input1").val("");
});

//enter key to submit
$(document).keydown(function (e) {
  if (e.key == "Enter") {
    marked = false;

    if ($(".input1").val().length == 0) {
      //$(".input1").val("Input something ");
      alert("input something");
    } else {
      submitNote(marked);
    }

    $(".input1").val("");
  }
});

// checkbox 1
/* to mark if its done while writing and to increment completed record and to send it to the note list*/

$(".checkbox1").click(function () {
  strikeThrough = true;
  if ($(this).is(":checked")) {
    $(".input1").css({ textDecoration: "line-through" });
    completed++;

    $(".completedNotes").text("Completed" + ": " + completed);
    marked = true;

    submitNote(marked);

    $(".input1").val("");
  } else {
    $(".input1").css({ textDecoration: "" });
    $(".input1").val("");
  }
});

// checkbox 2
/* to mark if its done after writing*/

// Delete Button
$(".clear1").click(function () {
  $(".input1").val("");
});

// ***************************************

//function to submit the note to the list
function submitNote(marked) {
  container = $(".input1").val();
  notesList.push(container);
  num += 1;
  console.log(notesList);
  console.log(container);
  // add H1 Tag
  var newElement = [
    $(`<h1 class = "noteItem" id="note${num}">${container}</h1>`),
    $(
      `<button id=MR${num} class="markButton buttonMargin btn btn-success btn-sm">Mark done</button>`
    ),
    $(
      `<button id=Bt${num} class="deleteButton btn btn-danger btn-sm">Delete</button>`
    ),
    $(`<br id= Br${num}>`)
  ];
  newElement.map(function (item) {
    $(`.noteContext`).append(item);
  });
  // $(`.noteContext`).append(newElement[0]);
  // $(`.noteContext`).append(newElement[1]);
  // $(`.noteContext`).append(newElement[2]);
  // $(`.noteContext`).append(newElement[3]);
  // newElement[0].append(`.notePaperImg`);
  // newElement[1].append(`.notePaperImg`);
  // newElement[2].append(`.notePaperImg`);
  // newElement[3].append(`.notePaperImg`);
  // var newElement = $(
  //   `<h1 class = "noteItem" id="note${num}">${num}: ${container}</h1>`
  // );
  // $(".noteContext").append(
  //   `<h1 class = "noteItem" id="note${num}">${num}: ${container}</h1>`
  // );
  // add button Tag
  // $(".noteContext").append(
  //   `<button id=MR${num} class="markButton buttonMargin btn btn-success btn-sm">Mark done</button>`
  // );
  // // add Delete Button Tag
  // $(".noteContext").append(
  //   `<button id=Bt${num} class="deleteButton btn btn-danger btn-sm">Delete</button>`
  // );
  // // add Delete Tag
  // $(".noteContext").append(`<br id= Br${num}>`);
  // Remove any text decoration
  $(".input1").css({ textDecoration: "" });

  if (marked === false) {
    notDone++;
    $(".notDone").text("Not done" + ": " + notDone);
    $(`#input${num}`).css({ textDecoration: "" });
  } else {
    $(`#note${num}`).css({ textDecoration: "line-through" });

    setTimeout(function () {
      $(".checkbox1").prop("checked", false);
    }, 300);
    console.log("andrew");
  }
}

// on clicking Mark Button
$(document).on("click", ".markButton", function () {
  var b = this.id;
  console.log(b);
  var number1 = b[2];
  if (!$(`#MR${number1}`).hasClass("striked")) {
    var a = this.id;
    var number = a[2];
    console.log(number);
    console.log(completed);
    completed++;
    if (notDone < 1) {
      notDone++;
    }

    notDone--;
    $(`#note${number}`).css({ textDecoration: "line-through" });
    $(".notDone").text("Not done" + ": " + notDone);
    $(".completedNotes").text("Completed" + ": " + completed);
    $(`#MR${number1}`).addClass("striked");
  }
});

// *******************************************************************

// on clicking Delete Button
$(document).on(`click`, `.deleteButton`, function () {
  var a = this.id;
  var number = a[2];
  console.log("delete number " + number);
  console.log(number);

  num--;
  if ($(`#MR${number}`).hasClass("striked")) {
    $(`#Br${number}`).remove();
    $(`#note${number}`).remove();
    $(this).remove();
    $(`#MR${number}`).remove();
    notesList.splice(number - 1);
    // test code

    //

    console.log("ayyyy");
  } else {
    $(`#note${number}`).remove();
    $(this).remove();
    $(`#MR${number}`).remove();
    notesList.splice(number - 1);
    $(`#Br${number}`).remove();
    notDone--;
  }
  $(".notDone").text("Not done" + ": " + notDone);
  if (completed < 1) {
    completed++;
  }
  completed--;

  $(".completedNotes").text("Completed" + ": " + completed);

  $(".notDone").text("Not done" + ": " + notDone);
});
// ***************************************************************//

// To Do list
//1-Make website respoivnes
//2- style check mark
