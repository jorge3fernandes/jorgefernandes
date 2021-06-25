var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth() + 1;
var currentYearMonth = currentYear+"/0"+currentMonth

console.log(currentYearMonth)

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("resume", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(50, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    // var title = chart.titles.create();
    //         title.text = "My Resume";
    //         title.fontSize = 25;    
    //         title.marginBottom = 30;
    
    var colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;
    
    chart.data = [{
        "category": "Immigration",
        "start": "2007/03",
        "end": "2007/03",
        "color": colorSet.getIndex(5),
        "task": "Left: Cape Verde Islands",
        "disabled2":false,
        "image2":"./img/misc/cv.png",
        "location":0
    },{
        "category": "Immigration",
        "start": "2007/03",
        "end": "2007/04",
        "color": colorSet.getIndex(5),
        "task": "Immigrated from Cape Verde to United States",
        "disabled2":false,
        "image2":"./img/misc/us.jpg",
        "location":0
    },{
        "category": "Job",
        "start": "2014/06",
        "end": "2016/05",
        "color": colorSet.getIndex(5),
        "task": "Tenure at The Hartford",
        "disabled2":false,
        "image2":"./img/companies/the_hartford.png",
        "location":0
    }, {
        "category": "Job",
        "start": "2016/06",
        "end": currentYearMonth,
        "color": colorSet.getIndex(0),
        "task": "Tenure at Pratt",
        "disabled2":false,
        "image2":"./img/companies/pratt.png",
        "location":0
    }, {
        "category": "Job",
        "start": "2009/06",
        "end": "2009/09",
        "color": colorSet.getIndex(0),
        "task": "Factory Job - Employment 2000 inc.",
        "disabled2":false,
        "image2":"./img/companies/emp2000.jpeg",
        "location":0
    },{
        "category": "Studies",
        "start": "2009/09",
        "end": "2014/05",
        "color": colorSet.getIndex(1),
        "task": "BS in Math",
        "disabled2":false,
        "image2":"./img/school/umd.jpg",
        "location":0
    }, {
        "category": "Studies",
        "start": "2015/03",
        "end": "2020/04",
        "color": colorSet.getIndex(8),
        "task": "Masters in Data Science",
        "disabled2":false,
        "image2":"./img/school/northwestern.png",
        "location":0
    }, {
        "category": "Studies",
        "start": "2007/4",
        "end": "2009/06",
        "color": colorSet.getIndex(9),
        "task": "High School",
        "disabled2":false,
        "image2":"./img/school/bhs.png",
        "location":0
    }];
    
    chart.dateFormatter.dateFormat = "yyyy/MM";
    chart.dateFormatter.inputDateFormat = "yyyy/MM";
    chart.fontSize = 15;
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;
    
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;
    
    var labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);
    
    var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";
    
    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 5;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;
    
    
    var bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;
    
    
    var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";
    
    var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 0;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";
    
    
    var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.data = [
        { category: "Job", eventDate: "2014-06", letter: "I", description: "Hired as Interned" },
        { category: "Job", eventDate: "2014-09", letter: "H", description: "Accepted a Full Time offer: Data Specialist" },
        { category: "Job", eventDate: "2016-06", letter: "H", description: "Hired as Senior Data Anayst" },
        { category: "Job", eventDate: "2018-03", letter: "P", description: "Promoted To Data Scientist" },
        { category: "Job", eventDate: "2018-12", letter: "P", description: "Promoted to Sr. Data Scientist" },
        { category: "Job", eventDate: "2020-10", letter: "P", description: "Became a Product Owner"},
        { category: "Job", eventDate: "2021-03", letter: "I", description: "Deployed First Full Stack Django ML App(Self Thought)."},
        { category: "Job", eventDate: "2021-05", letter: "P", description: "Leading RPA and Intelligent Automation"},
        { category: "Job", eventDate: "2021-06", letter: "P", description: "Introduced UltraLearning Self and Loving It."}
       ];
    eventSeries.strokeOpacity = 0;
    
    var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";
    
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center"
    chart.scrollbarX.width = am4core.percent(80);
    
    var cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 0.1;
    
    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;
    
    
    }); // end am4core.ready()