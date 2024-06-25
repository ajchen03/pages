const boxButton = document.getElementById('boxButton');
const radioButton = document.getElementById('radioButton');
const medalButton = document.getElementById('medalButton');
const image1Button = document.getElementById('image1Button');
const image2Button = document.getElementById('image2Button');
const image3Button = document.getElementById('image3Button');
const image4Button = document.getElementById('image4Button');

const medalImage = document.getElementById('medalImage');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const imageContainer = document.getElementById('imageContainer');

// 添加点击事件监听器
boxButton.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认行为，比如链接的跳转
    // 在这里编写按钮点击后要执行的操作
    alert('这是一些旧衣物和杂物。');
});

radioButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('今天是中国人民志愿军抗美援朝战争胜利70周年。这场伟大胜利，不仅捍卫了新中国的安全，彰显了新中国的大国地位，使新中国在错综复杂的国内国际环境中站稳了脚跟，而且对于实现中华民族伟大复兴、推动世界和平发展都有着十分深远的影响。在向第二个百年奋斗目标进军的新征程上，回顾波澜壮阔的抗美援朝战争，既要感念先辈们的伟大精神和历史功勋，更要汲取用鲜血和生命换来的宝贵历史经验，以更加主动的历史自觉、更加执着的战略定力、更加顽强的斗争意志，谱写强国建设、民族复兴的时代华章。');
});

medalButton.addEventListener('click', function(event) {
    event.preventDefault();
    medalImage.style.visibility = 'visible';
    imageContainer.classList.add('blurred');
    event.stopPropagation();
});

medalButton.addEventListener('click', function(event) {
    event.preventDefault();
    medalImage.style.visibility = 'visible';
    imageContainer.classList.add('blurred');
    event.stopPropagation();
});

image1Button.addEventListener('click', function(event) {
    event.preventDefault();
    image1.style.visibility = 'visible';
    imageContainer.classList.add('blurred');
    event.stopPropagation();
});

image2Button.addEventListener('click', function(event) {
    event.preventDefault();
    image2.style.visibility = 'visible';
    imageContainer.classList.add('blurred');
    event.stopPropagation();
});

image3Button.addEventListener('click', function(event) {
    event.preventDefault();
    image3.style.visibility = 'visible';
    imageContainer.classList.add('blurred');
    event.stopPropagation();
});

image4Button.addEventListener('click', function(event) {
    event.preventDefault();
    image4.style.visibility = 'visible';
    imageContainer.classList.add('blurred');
    event.stopPropagation();
});

document.addEventListener('click', function() {
    medalImage.style.visibility = 'hidden';
    image1.style.visibility = 'hidden';
    image2.style.visibility = 'hidden';
    image3.style.visibility = 'hidden';
    image4.style.visibility = 'hidden';
    imageContainer.classList.remove('blurred');
});

/* medalImage.addEventListener('click', function(event) {
    event.stopPropagation();
}); */
