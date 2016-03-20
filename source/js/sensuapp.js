$(document).ready(function() {

  var alertStates = ["info", "success", "warning", "danger"];
  for (i = 0; i < alertStates.length; i++) {
    var alert = alertStates[i];
    if (alert == "info") {
      var alertLabel = "note";
    } else {
      var alertLabel = alert;
    };
    var alerts = $("em:contains(" + alertLabel.toUpperCase() + ")")
    $.each(alerts, function(index,alertHTML) {
      var alertContent = alertHTML.innerHTML;
      alertContent = alertContent.replace(alertLabel.toUpperCase(), "<strong>" + alertLabel.toUpperCase() + "</strong>");
      alertHTML.innerHTML = "<div class='alert alert-" + alert + "'>" + alertContent + "</div>";
    });
  };

  $(":header:contains('Ubuntu/Debian')").addClass("ubuntu").prepend("<i class='fl-ubuntu'></i>");
  $(":header:contains('RHEL/CentOS')").addClass("centos").prepend("<i class='fl-centos'></i>");

  var dts = $("#documentation > dl > dt");
  $.each(dts, function(index, dt) {
    $("<hr/>").insertBefore(dt);
  });

  $(".hamburger-button").click(function() {
    $(this).toggleClass("collapsed");
    $(".toc-collapse").slideToggle();
  });
});
