fetch('../data.json')
  .then(resp => resp.json())
  .then(data => {
    data.forEach(item => {
      const category = item.category;
      const score = item.score;
      const icon = item.icon;

      // display the data in each list
      const list = document.querySelector('ul');
      const listItem = document.createElement('li');
      listItem.className = `status ${category.toLowerCase()}`;

      const iconImg = document.createElement('img');
      iconImg.src = icon;
      iconImg.alt = `${category} icon`;

      const categoryText = document.createElement('p');
      categoryText.textContent = category;

      const div = document.createElement('div');
      div.appendChild(iconImg);
      div.appendChild(categoryText);

      const scoreText = document.createElement('p');
      scoreText.textContent = score;
      const scoreSpan = document.createElement('span');
      scoreSpan.textContent = ' / 100';
      scoreText.appendChild(scoreSpan);

      listItem.appendChild(div);
      listItem.appendChild(scoreText);
      list.appendChild(listItem);

      // get the average of the scores on the list
      const totalScore = data.reduce((acc, item) => acc + item.score, 0);
      const averageScore = Math.floor(totalScore / data.length);
      const averageClass = document.querySelector('.average');
      averageClass.textContent = averageScore;
    });
  })
  .catch(error => console.log(error));