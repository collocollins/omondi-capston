// script.js

// Resume Section: Open different resume PDFs based on the selection
document.getElementById('resume').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Resume</h2>
        <div>
            <a href="https://drive.google.com/file/d/1Q3jf7NQluBR23EqDdygayECBf_n50bXD/view?usp=sharing" target="_blank">Open Resume (English)</a>
            <a href="https://drive.google.com/file/d/1dUIwOYpYpUbfBKBByFsBhb9IOHpz0kRB/view?usp=drive_link" target="_blank">Open Resume (Kiswahili)</a>
            <a href="https://drive.google.com/file/d/1qk97YKDQ3vvsOAMBxbINPT5WEIuPfUp6/view?usp=drive_link" target="_blank">Open Resume (Luo)</a>
        </div>
    `;
});

// Autobiography Section: Handle the dropdown options (Essay & Presentation)
document.getElementById('autobiography').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Autobiography</h2>
        <div>
            <a href="https://drive.google.com/file/d/1lK3MiTDgPUUKjVsVJAMLxpoWCWFFKmo0/view?usp=drive_link" target="_blank">Open Autobiography (PDF)</a>
            <a href="https://drive.google.com/file/d/1fYkdymQw_TMyBNto_JlmV4QQ9p1shukv/view?usp=drive_link&ouid=110884843582362106825&rtpof=true&sd=true" target="_blank">Open Autobiography (PPT)</a>
        </div>
    `;
});

// Autobiography Essay (PDF) - Opens in a new tab from Google Drive (like Resume)
document.getElementById('autobiographyEssay').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1lK3MiTDgPUUKjVsVJAMLxpoWCWFFKmo0/view?usp=drive_link', '_blank');
});

// Autobiography Presentation (PowerPoint) - Opens directly in an iframe from Google Drive (not downloading)
document.getElementById('autobiographyPresentation').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Autobiography Presentation</h2>
        <iframe src="https://drive.google.com/file/d/1fYkdymQw_TMyBNto_JlmV4QQ9p1shukv/preview" width="600" height="400"></iframe>
    `;
});

// Innovation Section (Reverted to iframe embedding)
document.getElementById('innovation').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Innovation Presentation</h2>
        <iframe src="https://drive.google.com/file/d/1Teq3t-TcsUdPq7IUZEek2ZJL5AAlImsH/preview" width="600" height="400"></iframe>
    `;
});

// African Culture Section (Reverted to iframe embedding)
document.getElementById('africanCulture').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>African Culture Presentation</h2>
        <iframe src="https://drive.google.com/file/d/1sgg_K-YVITViDe0TB5c-NSEYHVjtqOZg/preview" width="600" height="400"></iframe>
    `;
});

// Photographic Essay Section
document.getElementById('photographicEssay').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Photographic Essay</h2>
        <a href="https://drive.google.com/file/d/1hnH2yFKLcF7LvtEd5Vy2dPhK4QiPCmEU/view?usp=drive_link" target="_blank">Open Photographic Essay (PDF)</a>
    `;
});

// Videos Section: Handle dropdown options (Innovation, African Culture, Modern Challenges)
document.getElementById('videos').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Select a Video Topic:</h2>
        <div>
            <button id="innovationVideo">Innovation Video</button>
            <button id="africanCultureVideo">African Culture Video</button>
            <button id="modernChallengesVideo">Modern Challenges Video</button>
        </div>
    `;
});

// Innovation Video
document.getElementById('innovationVideo').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Innovation Video</h2>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/E6Ed5FTsZ9c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
});

// African Culture Video
document.getElementById('africanCultureVideo').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>African Culture Video</h2>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/iVnH89kzRTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
});

// Modern Challenges Video
document.getElementById('modernChallengesVideo').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Modern Challenges Video</h2>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/WCIkAvl9Feo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
});
