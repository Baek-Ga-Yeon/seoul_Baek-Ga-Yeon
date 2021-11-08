var data = [
    {id: 0, text: '사과'},
    {id: 1, text: '바나나'},
    {id: 2, text: '포도'},
]

$('.single-select'.select2({
    // theme: 'classic',
    language: {
        noResults: function() {
            return "검색 내역이 없습니다.";
            
        }
    },
    minimumResultsForSearch: -1,
    width:'400px',
    data: data,
  

    templateResult: function(state) {
        var icon = "img src='https://via.placeholder.com/10'>"
        var $state = $(`
        <span>${state.text}</span>

return $state;

    }
});



// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {


// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";



var arr = [];


var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



$('.destroy').click(function() {
$select.select2("destroy");
});



$('.re').click(function() {
$select.select2();
});

var $multiple = $('.multiple-select').select2();

$(".set-two").click(function() {
$multiple.val(["토마토", "당근"]).trigger("change");

})

$(".claer").click(function() {
$multiple.val(null).trigger("change");

})

