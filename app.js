const btn = document.getElementById("btn");
let bgcolor_span = document.getElementById("color");
//const bgcolor_opts = ["Blue", "Red", "Yellow", "Green", "White", "Gray", "Violet"];
var bgcolor_opts = ['MediumVioletRed', 'DeepPink', 'PaleVioletRed', 'HotPink', 
'LightPink', 'Pink', 'DarkRed', 'Red', 'Firebrick', 'Crimson', 
'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 
'LightSalmon', 'OrangeRed', 'Tomato', 'DarkOrange', 'Coral', 
'Orange', 'DarkKhaki', 'Gold', 'Khaki', 'PeachPuff', 'Yellow', 
'PaleGoldenrod', 'Moccasin', 'PapayaWhip', 'LightGoldenrodYellow', 
'LemonChiffon', 'LightYellow','Maroon', 'Brown', 'SaddleBrown', 'Sienna', 
'Chocolate', 'DarkGoldenrod', 'Peru', 'RosyBrown', 'Goldenrod', 
'SandyBrown', 'Tan', 'Burlywood', 'Wheat', 'NavajoWhite', 'Bisque', 
'BlanchedAlmond', 'Cornsilk','DarkGreen', 'Green', 'DarkOliveGreen', 
'ForestGreen', 'SeaGreen', 'Olive', 'OliveDrab', 'MediumSeaGreen', 
'LimeGreen', 'Lime', 'SpringGreen', 'MediumSpringGreen', 'DarkSeaGreen', 
'MediumAquamarine', 'YellowGreen', 'LawnGreen', 'Chartreuse', 'LightGreen', 
'GreenYellow', 'PaleGreen', 'Teal', 'DarkCyan', 'LightSeaGreen', 
'CadelBlue', 'DarkTurquoise', 'MediumTurquoise', 'Turquoise', 'Aqua', 
'Cyan', 'AquaMarine', 'PaleTurquoise', 'LightCyan', 'Navy', 'DarkBlue', 
'MediumBlue', 'Blue', 'MidnightBlue', 'RoyalBlue', 'SteelBlue', 
'DodgerBlue', 'DeepSkyBlue', 'CornFlowerBlue', 'SkyBlue', 'LightSkyBlue', 
'LightSteelBlue', 'LightBlue', 'PowderBlue', 'Indigo', 'Purple', 
'DarkMagenta', 'DarkViolet', 'DarkSlateBlue', 'BlueViolet', 'DarkOrchid', 
'Fuchsia', 'Magenta', 'SlateBlue', 'MediumSlateBlue', 
'MediumOrchid', 'MediumPurple', 'Orchid', 'Violet', 'Plum', 
'Thistle', 'Lavender', 'MistyRose', 'AntiqueWhite', 'Linen', 
'Beige', 'WhiteSmoke', 'LavenderBlush', 'OldLace', 'AliceBlue', 
'Seashell', 'GhostWhite', 'Honeydew', 'ForalWhite', 'Azure', 
'MintCream', 'Snow', 'Ivory', 'White', 'Black', 'DarkSlateGray', 
'DimGray', 'SlateGrey', 'Gray', 'LightSlateGray', 'DarkGray', 
'Silver', 'LightGray', 'Gainsboro'];;
let sizeof_opts = bgcolor_opts.length;
btn.addEventListener("click", () => {
    let randomnum = Math.floor(Math.random() * sizeof_opts);
    let bgcolor = bgcolor_opts[randomnum];
    document.body.style.background = `${bgcolor}`; 
    bgcolor_span.textContent = bgcolor;
});