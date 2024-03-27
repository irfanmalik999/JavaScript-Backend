require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

const GithubData = {
  "login": "prouppernew",
  "id": 103571817,
  "node_id": "U_kgDOBixhaQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/103571817?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prouppernew",
  "html_url": "https://github.com/prouppernew",
  "followers_url": "https://api.github.com/users/prouppernew/followers",
  "following_url": "https://api.github.com/users/prouppernew/following{/other_user}",
  "gists_url": "https://api.github.com/users/prouppernew/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prouppernew/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prouppernew/subscriptions",
  "organizations_url": "https://api.github.com/users/prouppernew/orgs",
  "repos_url": "https://api.github.com/users/prouppernew/repos",
  "events_url": "https://api.github.com/users/prouppernew/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prouppernew/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Md Irfan Shoaib Mallick",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2022-04-13T10:17:49Z",
  "updated_at": "2024-03-15T23:26:44Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Irfan Backend using express')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login on my first Backend App</h1>')
})

app.get('/github', (req, res) => {
    res.json(GithubData.stringify())
})
 
app.get('/app.getData', (req, res) => {
    res.send('<h2> app.get ka kaam hai HTTP GET requests ko handle karna. Jab koi user apne browser mein kisi URL ko type karta hai ya kisi link par click karta hai, tab browser us URL ka GET request server ki taraf bhejta hai. app.get function ka upyog yeh karne ke liye hota hai ki jab server ko koi GET request milta hai, to wo us request ka URL check karta hai aur us URL ke according sahi response ko bhejta hai. Ismein, app.get ke through hum URL paths aur unke corresponding handlers define karte hain, jo ki user ko response mein data provide karte hain.</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

