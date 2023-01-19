export const createUserCard = (user) =>{
  const {id, name, email, website:site = '사이트'} = user //website라는 키값을 site라는 이름으로 받아서 쓰겠다.
  return /* html */`
  <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:${email}">${email}</a>
      </div>
      <div>
        <a class="user-website" href="http://${site}" target="_blank" rel="noopener noreferer">${site}</a>
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>
</section>
`
}

createUserCard({
  id: 1,
  name: 'generalRam',
  email: 'Ram@google.com',
  website: 'ramjwi.com'})