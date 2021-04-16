$.ajax({
  url: 'http://127.0.0.1:8001/list',
  method:'get',
  dataType:'jsonp',
  success:(msg) => {
    console.log(msg)
  }
})

console.log(123)