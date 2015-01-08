/*
  Anadolu Panteri JS Utils
*/
var ApCore = function(){
  this.ver = "0.1";
  this.module = false;
  this.debug = false;
  if(this.module){
    if(this.debug){
      console.log(this.module + ' is loaded.');
    }
  }

  this.js = function(src, callback){
    var s,
    r,
    t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function() {
      //console.log( this.readyState ); //uncomment this line to see which ready states are called.
      if ( !r && (!this.readyState || this.readyState == 'complete') )
      {
        r = true;
        callback();
      }
    };
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
  }

  this.jquery = function(function){
    this.js()
  }
};
