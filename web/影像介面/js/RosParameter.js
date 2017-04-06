//ParameterCamera
var ParameterCamera = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/FPS',
});
/*function ParameterCameraTransfer() {
	var ParameterCameraBox = [];
	$("[name=CameraElement]").each(function() {
	    ParameterCameraBox.push(parseInt($(this).val()));
	});
	console.log(ParameterCameraBox);
	ParameterCamera.set(ParameterCameraBox);
}*/
function ParameterCameraValue(){
	var value = parseInt(document.getElementsByName('CameraElement')[0].value);
	console.log(value);
    ParameterCamera.set(value);
}
//ParameterCenter
var ParameterCenter = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/Center',
});
function ParameterCenterTransfer(){
	var box = [];
	$("[name=CenterElement]").each(function() {
	    box.push(parseInt($(this).val()));
	});
	console.log(box);
	ParameterCenter.set(box);
}
/*ParameterCenter.get(function(value) {
    if (value != null) {
        var obj = document.getElementsByName("CenterElement");
        for (var i = 0; i < obj.length; i++) {
            obj[i].value = value[i];
        }
    }
});*/
//ParameterScan
var ParameterScan = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/scan_para',
});
function ParameterScanTransfer(){
	var box = [];
	$("[name=ScanElement]").each(function() {
	    box.push(parseInt($(this).val()));
	});
	console.log(box);
	ParameterScan.set(box);
}
//ParameterHSV
var ParameterHSV_Ball = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/HSV/Ball',
});
var ParameterHSV_Green = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/HSV/Green',
});
var ParameterHSV_Blue = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/HSV/Blue',
});
var ParameterHSV_Yellow = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/HSV/Yellow',
});
//ParameterWhite
var ParameterWhite = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/HSV/white',
});
function ParameterHSVTransfer(){
   var mode = parseInt(document.getElementById('HSVSelect').value);
	var box = [];
    switch (mode) {
        case 0:
            for (var i = 0; i < 6; i++) {
               box[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
            }
             console.log(box);
             ParameterHSV_Ball.set(box);
            break;
        case 1:
            for (var i = 0; i < 6; i++) {
                box[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
            }
                 console.log(box);
                ParameterHSV_Green.set(box);
            break;
        case 2:
            for (var i = 0; i < 6; i++) {
                box[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
            }
                 console.log(box);
                 ParameterHSV_Blue.set(box);
            break;
        case 3:
            for (var i = 0; i < 6; i++) {
                box[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
            }
                 console.log(box);
                 ParameterHSV_Yellow.set(box);
            break;
        case 4:
            for (var i = 0; i < 6; i++) {
                WhiteBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                //ParameterHSV.set
            }
            break;
    }
}

function ParameterWhiteTransfer(){
	var box = [];
	$("[name=WhiteElement]").each(function() {
	    box.push(parseInt($(this).val()));
	});
	console.log(box);
	ParameterWhite.set(box);
}
//ParameterBlack
var ParameterBlack = new ROSLIB.Param({
    ros: ros,
    name: '/FIRA/HSV/black',
});
function ParameterBlackTransfer(){
	var box = [];
	$("[name=BlackElement]").each(function() {
	    box.push(parseInt($(this).val()));
	});
	console.log(box);
	ParameterBlack.set(box);
}
