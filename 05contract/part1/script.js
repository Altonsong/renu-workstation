
document.addEventListener('DOMContentLoaded', function() {
  const phoneInputs = document.querySelectorAll('.phone-input');
  
  phoneInputs.forEach(function(input) {
      input.addEventListener('input', function() {
          // 去除非数字字符
          let cleaned = input.value.replace(/\D/g, '');
          
          // 格式化成 (XXX)XXX-XXXX
          let formatted = '';
          if (cleaned.length >= 10) {
              formatted = '(' + cleaned.substr(0, 3) + ')'
                        + cleaned.substr(3, 3)
                        + '-' + cleaned.substr(6, 4);
          } else {
              formatted = cleaned;
          }
          
          // 更新输入框的值
          input.value = formatted;
      });
  });
});

function addItemA() {
  // 获取输入框的值
  const inputValue = document.getElementById('textInput-a').value.trim();
  console.log('Input value A:', inputValue);
  
  // 如果输入框的值不为空
  if (inputValue !== '') {
      // 创建复选框元素
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox_' + Math.random().toString(36).substr(2, 9); // 生成一个唯一的 ID
      console.log('Checkbox ID A:', checkbox.id);
      
      // 创建标签元素
      const label = document.createElement('label');
      label.setAttribute('for', checkbox.id);
      label.textContent = inputValue;
      console.log('Label text A:', label.textContent);
      
      // 创建一个新的 div 元素用于容纳复选框和标签，并设置为块级元素
      const newItem = document.createElement('div');
      newItem.style.display = 'block';
      console.log('New item A:', newItem);
      
      // 将复选框和标签添加到新创建的 div 元素中
      newItem.appendChild(checkbox);
      newItem.appendChild(label);
      
      // 将新创建的 div 元素添加到 .descriptionInputAreaA 中
      const descriptionAreaA = document.querySelector('.descriptionInputAreaA');
      console.log('Description area A:', descriptionAreaA);
      descriptionAreaA.appendChild(newItem);
      
      // 清空输入框的值
      document.getElementById('textInput-a').value = '';
  }
}

function addItemB() {
  // 获取输入框的值
  const inputValue = document.getElementById('textInput-b').value.trim();
  console.log('Input value B:', inputValue);
  
  // 如果输入框的值不为空
  if (inputValue !== '') {
      // 创建复选框元素
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox_' + Math.random().toString(36).substr(2, 9); // 生成一个唯一的 ID
      console.log('Checkbox ID B:', checkbox.id);
      
      // 创建标签元素
      const label = document.createElement('label');
      label.setAttribute('for', checkbox.id);
      label.textContent = inputValue;
      console.log('Label text B:', label.textContent);
      
      // 创建一个新的 div 元素用于容纳复选框和标签，并设置为块级元素
      const newItem = document.createElement('div');
      newItem.style.display = 'block';
      console.log('New item B:', newItem);
      
      // 将复选框和标签添加到新创建的 div 元素中
      newItem.appendChild(checkbox);
      newItem.appendChild(label);
      
      // 将新创建的 div 元素添加到 .descriptionInputAreaB 中
      const descriptionAreaB = document.querySelector('.descriptionInputAreaB');
      console.log('Description area B:', descriptionAreaB);
      descriptionAreaB.appendChild(newItem);
      
      // 清空输入框的值
      document.getElementById('textInput-b').value = '';
  }
}

function addItemC() {
  // 获取输入框的值
  const inputValue = document.getElementById('textInput-c').value.trim();
  console.log('Input value C:', inputValue);
  
  // 如果输入框的值不为空
  if (inputValue !== '') {
      // 创建复选框元素
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox_' + Math.random().toString(36).substr(2, 9); // 生成一个唯一的 ID
      console.log('Checkbox ID C:', checkbox.id);
      
      // 创建标签元素
      const label = document.createElement('label');
      label.setAttribute('for', checkbox.id);
      label.textContent = inputValue;
      console.log('Label text C:', label.textContent);
      
      // 创建一个新的 div 元素用于容纳复选框和标签，并设置为块级元素
      const newItem = document.createElement('div');
      newItem.style.display = 'block';
      console.log('New item C:', newItem);
      
      // 将复选框和标签添加到新创建的 div 元素中
      newItem.appendChild(checkbox);
      newItem.appendChild(label);
      
      // 将新创建的 div 元素添加到 .descriptionInputAreaB 中
      const descriptionAreaC = document.querySelector('.descriptionInputAreaC');
      console.log('Description area C:', descriptionAreaC);
      descriptionAreaC.appendChild(newItem);
      
      // 清空输入框的值
      document.getElementById('textInput-c').value = '';
  }
}


function addItemD() {
  // 获取输入框的值
  const inputValue = document.getElementById('textInput-d').value.trim();
  console.log('Input value D:', inputValue);
  
  // 如果输入框的值不为空
  if (inputValue !== '') {
      // 创建复选框元素
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox_' + Math.random().toString(36).substr(2, 9); // 生成一个唯一的 ID
      console.log('Checkbox ID D:', checkbox.id);
      
      // 创建标签元素
      const label = document.createElement('label');
      label.setAttribute('for', checkbox.id);
      label.textContent = inputValue;
      console.log('Label text D:', label.textContent);
      
      // 创建一个新的 div 元素用于容纳复选框和标签，并设置为块级元素
      const newItem = document.createElement('div');
      newItem.style.display = 'block';
      console.log('New item D:', newItem);
      
      // 将复选框和标签添加到新创建的 div 元素中
      newItem.appendChild(checkbox);
      newItem.appendChild(label);
      
      // 将新创建的 div 元素添加到 .descriptionInputAreaB 中
      const descriptionAreaD = document.querySelector('.descriptionInputAreaD');
      console.log('Description area D:', descriptionAreaD);
      descriptionAreaD.appendChild(newItem);
      
      // 清空输入框的值
      document.getElementById('textInput-d').value = '';
  }
}


function createContract() {
  // 获取 owner name 的值
  const ownerName = document.querySelector('.owner-name').value.trim();

  const ownerAddress = document.querySelector('.owner-address').value.trim();
  const homePhone = document.querySelector('.home-phone').value.trim();
  const cellPhone = document.querySelector('.cell-phone').value.trim();
  // const officePhone = document.querySelector('.office-phone').value.trim();
  const emailAddress = document.querySelector('.email-address').value.trim();
  const renovationAddress = document.querySelector('.renovation-address').value.trim();

  const jobNumber = document.querySelector('.job-number').value.trim();
  const jobDate = document.querySelector('.job-date').value.trim();
  
  const startDate = document.querySelector('.start-date').value.trim();
  const finishDate = document.querySelector('.finish-date').value.trim();
  const contractPrice = document.querySelector('.contract-price').value.trim();
  const paidDeposit = document.querySelector('.paid-deposit').value.trim();
  const fiftyPoint = document.querySelector('.fifty-point').value.trim();


  
  // 获取选中的描述
  const selectedDescriptionsA = Array.from(document.querySelectorAll('.a-Description input[type="checkbox"]:checked + label')).map(label => label.textContent.trim());
  const selectedDescriptionsB = Array.from(document.querySelectorAll('.b-Description input[type="checkbox"]:checked + label')).map(label => label.textContent.trim());
  const selectedDescriptionsC = Array.from(document.querySelectorAll('.c-Description input[type="checkbox"]:checked + label')).map(label => label.textContent.trim());
  const selectedDescriptionsD = Array.from(document.querySelectorAll('.d-Description input[type="checkbox"]:checked + label')).map(label => label.textContent.trim());



  console.log('Owner Name:', ownerName);
  console.log('Owner Address:', ownerAddress);
  console.log('Home Phone:', homePhone);
  console.log('Cell Phone:', cellPhone);
  // console.log('Office Phone:', officePhone);
  console.log('Email Address:', emailAddress);
  console.log('Renovation Address:', renovationAddress);
  console.log('Job Number:', jobDate);
  console.log('Job Date:', jobDate);

  console.log('Selected Descriptions A:', selectedDescriptionsA);
  console.log('Selected Descriptions B:', selectedDescriptionsB);
  console.log('Selected Descriptions C:', selectedDescriptionsC);
  console.log('Selected Descriptions D:', selectedDescriptionsD);
  console.log('Start Date:', startDate);
  console.log('Finish Date:', finishDate);
  console.log('Contract Price:', contractPrice);
  console.log('Paid Deposit:', paidDeposit);
  console.log('Fifty Point:', fiftyPoint);





  const contractURL = './contract.html?' +
      'ownerName=' + encodeURIComponent(ownerName) +
      '&ownerAddress=' + encodeURIComponent(ownerAddress) +
      '&homePhone=' + encodeURIComponent(homePhone) +
      '&cellPhone=' + encodeURIComponent(cellPhone) +
      // '&officePhone=' + encodeURIComponent(officePhone) +
      '&emailAddress=' + encodeURIComponent(emailAddress) +
      '&renovationAddress=' + encodeURIComponent(renovationAddress) +
      '&jobNumber=' + encodeURIComponent(jobNumber) +
      '&jobDate=' + encodeURIComponent(jobDate) + 

      '&startDate=' + encodeURIComponent(startDate) +
      '&finishDate=' + encodeURIComponent(finishDate) +
      '&contractPrice=' + encodeURIComponent(contractPrice) +
      '&paidDeposit=' + encodeURIComponent(paidDeposit) +
      '&fiftyPoint=' + encodeURIComponent(fiftyPoint) +

      '&selectedDescriptionsA=' + encodeURIComponent(selectedDescriptionsA.join('|')) +
      '&selectedDescriptionsB=' + encodeURIComponent(selectedDescriptionsB.join('|')) +
      '&selectedDescriptionsC=' + encodeURIComponent(selectedDescriptionsC.join('|')) +
      '&selectedDescriptionsD=' + encodeURIComponent(selectedDescriptionsD.join('|'));

  // 打开新的页面
  window.open(contractURL, '_blank');
}

