<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sanchit Jadhav Portfolio</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif;scroll-behavior:smooth}
body{color:#fff;background:linear-gradient(-45deg,#0f172a,#1e293b,#2563eb,#7c3aed);background-size:400% 400%;animation:bg 12s ease infinite}
@keyframes bg{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}
nav{position:fixed;top:0;width:100%;display:flex;justify-content:space-between;padding:18px 8%;background:rgba(0,0,0,.25);backdrop-filter:blur(10px)}
nav ul{display:flex;gap:18px;list-style:none}
nav a{color:#fff;text-decoration:none}
section{padding:90px 8%}
.hero{min-height:100vh;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}
.hero img{width:380px;max-width:100%}
.title{text-align:center;margin-bottom:30px;font-size:2.3rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px}
.card{background:rgba(255,255,255,.1);padding:20px;border-radius:18px;backdrop-filter:blur(8px)}
.btn{display:inline-block;margin-top:15px;padding:12px 22px;background:#fff;color:#000;text-decoration:none;border-radius:25px;font-weight:bold}
.contact form{display:flex;flex-direction:column;gap:10px}
input,textarea,button{padding:12px;border:none;border-radius:10px}
footer{text-align:center;padding:25px}
@media(max-width:768px){.hero{text-align:center;justify-content:center;padding-top:100px}nav{flex-direction:column;gap:10px}nav ul{flex-wrap:wrap}}
.card a{
    color:white;
    text-decoration:none;
    font-weight:bold;
}

.card a:hover{
    color:#00e5ff;
}

.card img{
    width:100%;
    border-radius:10px;
}
</style>
</head>
<body>

<nav>
<h2>Sanchit Jadhav 🚀</h2>
<ul>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>

<section class="hero">
<div>
<h1>Hi, I'm Sanchit 👋</h1>
<h2 id="typing"></h2>
<p>B.Tech CSE student interested in Data Struture, Mern Stack, Building..</p>
<a href="index.html" class="btn">Resume</a>
</div>
<div>
<img src="https://media.tenor.com/qJ5evVs-_uUAAAAC/coding.gif">
</div>
</section>

<section id="about">
<h2 class="title">About Me</h2>
<div class="card">I am a Computer Science student at Parul University focused on Data Struture, Python, Mern Stack. I enjoy building projects and learning new technologies.</div>
</section>

<section>
<h2 class="title">Current Focus</h2>
<div class="card">
<ul>
<li>💻 DSA Practice</li>
<li>💻 Mern Stack</li>
<li>🚀 Building Projects</li>
<li>🤖 AI & Machine Learning</li>
<li>🎯 Internship Preparation</li>
</ul>
</div>
</section>

<section id="skills">
<h2 class="title">Tech Stack</h2>
<div class="grid">
<div class="card">Python</div>
<div class="card">Java</div>
<div class="card">HTML</div>
<div class="card">CSS</div>
<div class="card">JavaScript</div>
<div class="card">Git & GitHub</div>
</div>
</section>

<section>
<h2 class="title">Education</h2>
<div class="card">
<h3>B.Tech CSE</h3>
<p>Parul University</p>
<p>2024 - 2028</p>
</div>
</section>

<section id="projects">
<h2 class="title">Featured Projects</h2>
<div class="grid">
<div class="card"><h3>Flipkart Clone</h3><p>E-commerce UI project.</p></div>
<div class="card"><h3>Portfolio Website</h3><p>Personal portfolio project.</p></div>
<div class="card"><h3>Data Analysis</h3><p>Python data analysis project.</p></div>
</div>
</section>

<section>
<h2 class="title">Certificates</h2>

<div class="grid">

<div class="card">
<a href="Screenshot 2026-06-06 081532.png" target="_blank">
Python Programming Certificate
</a>
</div>

<div class="card">
<a href="html css.jpg" target="_blank">
HTML & CSS Certificate
</a>
</div>

<div class="card">
<a href="java script.jpg" target="_blank">
java-Script
</a>
</div>

</div>
</section>
<section>
<h2 class="title">Achievements</h2>
<div class="grid">
<div class="card"><h1>10+<p>DSA Problems</p></div>
<div class="card"><h1>5+<p>Projects</p></div>
<div class="card"><h1>3+<p>Certificates</p></div>
</div>
</section>

<section>
<h2 class="title">GitHub Contributions</h2>
<div class="card">
<img src="https://ghchart.rshah.org/Sanchit-jadhav134" width="100%">
</div>
</section>

<section>
<h2 class="title">Coding Profiles</h2>
<div class="grid">
<div class="card"><a href="https://github.com/Sanchit-jadhav134">GitHub</a></div>
<div class="card"><a href="https://www.linkedin.com/in/sanchit-jadhav-73539435a/">LinkedIn</a></div>
<div class="card"><a href="https://leetcode.com/u/Sanchit_Jadhav/">LeetCode</a></div>
</div>
</section>


<footer>Made By Sanchit 🚀</footer>

<script>
const words=["💻 DSA Practice","AI Enthusiast","Python Developer","Problem Solver"];
let i=0;
setInterval(()=>{
document.getElementById("typing").innerText=words[i];
i=(i+1)%words.length;
},1500);
document.getElementById("typing").innerText=words[0];
</script>

</body>
</html>
