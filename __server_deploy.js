/* 
-------------------------------
One time for your computer
-------------------------------
1. create heroku account
2. verify email
3. install heroku cli
4. heroku login

-------------------------------
For each project one time
-------------------------------
1. heroku create
2. make sure you: git add . git commit git push
3. git push heroku main
4. go to heroku dashboard > current project > Settings > Reveal config vars
5. copy paste config vars from your .env file.
6. Make sure you have whitelisted all ip address to access mongodb
-------------------------------
Update Server
-------------------------------
1. Make changes
2. make sure you: git add . git commit git push
3. git push heroku main
-------------------------------
Connect server with Client and deploy client
-------------------------------
1. replace localhost by heroku link
2. npm run build
3. firebase deploy
*/