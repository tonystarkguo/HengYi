<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
margin: 0;
padding: 0;
border: 0;
}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, 
strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, 
tfoot, thead, tr, th, td ,textarea,input { margin:0; padding:0;  }
address,cite,dfn,em,var, i {font-style:normal;}
body { line-height: 1.5; font-family:'Microsoft Yahei','simsun','arial','tahoma';  color: #222;}
table { border-collapse:collapse; border-spacing:0; }
h1, h2, h3, h4, h5, h6, th { font-size: 100%; font-weight: normal; }
button,input,select,textarea{font-size:100%;}
fieldset,img{border:0;}
a { text-decoration: none; color: #666; background: none }
ul, ol { list-style: none; }
:focus{ outline:none;}
.clearfix{ clear: both; content: ""; display: block; overflow: hidden }
.clear{clear: both;}
.fl{ float: left; }
.fr{float: right;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* html{font-size:10px}
@media screen and (min-width:321px) and (max-width:375px){html{font-size:11px}}
@media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
@media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
@media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
@media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
@media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
@media screen and (min-width:800px){html{font-size:25px}} */
</style>
