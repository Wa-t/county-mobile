const getSearchParams = (url) => {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
      var name = decodeURIComponent($1);
      var val = decodeURIComponent($2);
      val = String(val);
      obj[name] = val;
      console.log(rs);
  });
  return obj;
}

export {
  getSearchParams
}