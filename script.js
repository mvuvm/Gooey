
var PanoViewer = eg.view360.PanoViewer; //shortcut


var container1 = document.getElementById("myPanoViewer1");
var panoViewer1 = new PanoViewer(container1, {
  image: "https://iili.io/HGJXzzv.jpg",
  gyroMode: PanoViewer.GYRO_MODE.NONE });

PanoControls.init(document.querySelector("#myPanoViewer1"), panoViewer1);


