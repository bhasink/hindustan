/* filter for Student Enrolled Numbers */

$(function () {
  const sliderRange = $("#slider-rangenew");

  sliderRange.slider({
    range: true,
    min: 0,
    max: 100,
    values: [20, 100],
    change: function (event, ui) {
      $("#amount_min2").val(ui.values[0]);
      $("#amount_max2").val(ui.values[1]);
    },
    create: function () {
      let values = $(this).slider("option", "values");
      $("#amount_min2").val(values[0]);
      $("#amount_max2").val(values[1]);
    } });


  // Input value to Integer.
  const toInt = input => {
    let val = Number(input);

    if (Number.isInteger(val)) {
      return Number(val);
    } else {
      return 0;
    }
  };

  // Bind onchange event to inputs.
  $("#amount_min2").change(function () {
    let amount_min = toInt($(this).val());
    let amount_max = toInt($("#amount_max2").val());

    if (amount_min >= amount_max) {
      amount_min = amount_max;
    }

    sliderRange.slider("values", 0, amount_min);
  });

  $("#amount_max2").change(function () {
    let amount_max = toInt($(this).val());
    let amount_min = toInt($("#amount_min2").val());

    if (amount_max <= amount_min) {
      amount_max = amount_min;
    }

    sliderRange.slider("values", 1, amount_max);
  });
});




/* filter for Courses Offered */

$(function () {
  const sliderRange = $("#slider-rangecourses");

  sliderRange.slider({
    range: true,
    min: 0,
    max: 100,
    values: [0, 10],
    change: function (event, ui) {
      $("#amount_min3").val(ui.values[0]);
      $("#amount_max3").val(ui.values[1]);
    },
    create: function () {
      let values = $(this).slider("option", "values");
      $("#amount_min3").val(values[0]);
      $("#amount_max3").val(values[1]);
    } });


  // Input value to Integer.
  const toInt = input => {
    let val = Number(input);

    if (Number.isInteger(val)) {
      return Number(val);
    } else {
      return 0;
    }
  };

  // Bind onchange event to inputs.
  $("#amount_min3").change(function () {
    let amount_min = toInt($(this).val());
    let amount_max = toInt($("#amount_max3").val());

    if (amount_min >= amount_max) {
      amount_min = amount_max;
    }

    sliderRange.slider("values", 0, amount_min);
  });

  $("#amount_max3").change(function () {
    let amount_max = toInt($(this).val());
    let amount_min = toInt($("#amount_min3").val());

    if (amount_max <= amount_min) {
      amount_max = amount_min;
    }

    sliderRange.slider("values", 1, amount_max);
  });
});




/* filter for Duration */

$(function () {
  const sliderRange = $("#slider-durationrng");

  sliderRange.slider({
    range: true,
    min: 0,
    max: 12,
    values: [4, 12],
    change: function (event, ui) {
      $("#amount_min4").val(ui.values[0]);
      $("#amount_max4").val(ui.values[1]);
    },
    create: function () {
      let values = $(this).slider("option", "values");
      $("#amount_min4").val(values[0]);
      $("#amount_max4").val(values[1]);
    } });


  // Input value to Integer.
  const toInt = input => {
    let val = Number(input);

    if (Number.isInteger(val)) {
      return Number(val);
    } else {
      return 0;
    }
  };

  // Bind onchange event to inputs.
  $("#amount_min4").change(function () {
    let amount_min = toInt($(this).val());
    let amount_max = toInt($("#amount_max4").val());

    if (amount_min >= amount_max) {
      amount_min = amount_max;
    }

    sliderRange.slider("values", 0, amount_min);
  });

  $("#amount_max4").change(function () {
    let amount_max = toInt($(this).val());
    let amount_min = toInt($("#amount_min4").val());

    if (amount_max <= amount_min) {
      amount_max = amount_min;
    }

    sliderRange.slider("values", 1, amount_max);
  });
});




/* filter for Certificate Numbers */

$(function () {
  const sliderRange = $("#slider-range");

  sliderRange.slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    change: function (event, ui) {
      $("#amount_min").val(ui.values[0]);
      $("#amount_max").val(ui.values[1]);
    },
    create: function () {
      let values = $(this).slider("option", "values");
      $("#amount_min").val(values[0]);
      $("#amount_max").val(values[1]);
    } });


  // Input value to Integer.
  const toInt = input => {
    let val = Number(input);

    if (Number.isInteger(val)) {
      return Number(val);
    } else {
      return 0;
    }
  };

  // Bind onchange event to inputs.
  $("#amount_min").change(function () {
    let amount_min = toInt($(this).val());
    let amount_max = toInt($("#amount_max").val());

    if (amount_min >= amount_max) {
      amount_min = amount_max;
    }

    sliderRange.slider("values", 0, amount_min);
  });

  $("#amount_max").change(function () {
    let amount_max = toInt($(this).val());
    let amount_min = toInt($("#amount_min").val());

    if (amount_max <= amount_min) {
      amount_max = amount_min;
    }

    sliderRange.slider("values", 1, amount_max);
  });
});