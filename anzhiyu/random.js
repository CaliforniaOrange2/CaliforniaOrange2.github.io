var posts=["2024/03/21/hello-world/","2024/04/13/什么是人工智能（AI）？—— 你需要知道的三件事/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };