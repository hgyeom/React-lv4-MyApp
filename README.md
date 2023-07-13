# React 심화주차 과제 - 4레벨, MyApp


|기능|URL|Method|Request|Response|
|---|---|---|---|---|
|글 전체 조회|/posts|GET||[<br>{<br> "id": "id",<br> "writer": "writer",<br>"title": "title",<br>"password": "password",<br>"contents": "contents"<br>}, ...<br>]|
|글 한개 조회|/posts/id|GET||{<br> "id": "id",<br> "writer": "writer",<br>"title": "title",<br>"password": "password",<br>"contents": "contents"<br>}|
|글 작성|/posts|POST|{<br> "id": "id",<br> "writer": "writer",<br>"title": "title",<br>"password": "password",<br>"contents": "contents"<br>}||
|글 수정|/posts/id|PATCH|{<br> "id": "id",<br> "writer": "writer",<br>"title": "title",<br>"contents": "contents"<br>}||
|글 삭제|/posts/id|DELETE|||
