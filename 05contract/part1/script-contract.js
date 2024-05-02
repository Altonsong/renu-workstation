
document.addEventListener('DOMContentLoaded', function() {
    // 从 URL 中获取 owner 名字和选中的描述
    const urlParams = new URLSearchParams(window.location.search);
    const ownerName = urlParams.get('ownerName');
    const ownerAddress = urlParams.get('ownerAddress');
    const homePhone = urlParams.get('homePhone');
    const cellPhone = urlParams.get('cellPhone');
    const officePhone = urlParams.get('officePhone');
    const emailAddress = urlParams.get('emailAddress');
    const renovationAddress = urlParams.get('renovationAddress');
    const jobNumber = urlParams.get('jobNumber');
    const jobDate = urlParams.get('jobDate');


    const selectedDescriptionsAParam = urlParams.get('selectedDescriptionsA');
    const selectedDescriptionsBParam = urlParams.get('selectedDescriptionsB');
    const selectedDescriptionsCParam = urlParams.get('selectedDescriptionsC');
    const selectedDescriptionsDParam = urlParams.get('selectedDescriptionsD');

    const startDate = urlParams.get('startDate');
    const finishDate = urlParams.get('finishDate');
    const contractPrice = parseFloat(urlParams.get('contractPrice')); // 转换为浮点数

    const paidDeposit = urlParams.get('paidDeposit');
    const fiftyPoint = urlParams.get('fiftyPoint');

    // 检查selectedDescriptionsAParam和selectedDescriptionsBParam是否为null
    const selectedDescriptionsA = selectedDescriptionsAParam ? selectedDescriptionsAParam.split('|') : [];
    const selectedDescriptionsB = selectedDescriptionsBParam ? selectedDescriptionsBParam.split('|') : [];
    const selectedDescriptionsC = selectedDescriptionsCParam ? selectedDescriptionsCParam.split('|') : [];
    const selectedDescriptionsD = selectedDescriptionsDParam ? selectedDescriptionsDParam.split('|') : [];

    console.log('Owner Name:', ownerName);
    console.log('Owner Address:', ownerAddress);
    console.log('Home Phone:', homePhone);
    console.log('Cell Phone:', cellPhone);
    console.log('Office Phone:', officePhone);
    console.log('Email Address:', emailAddress);
    console.log('Renovation Address:', renovationAddress);
    console.log('Job Number:', jobNumber);
    console.log('job Date', jobDate);


    console.log('Selected Descriptions A:', selectedDescriptionsA);
    console.log('Selected Descriptions B:', selectedDescriptionsB);
    console.log('Selected Descriptions C:', selectedDescriptionsC);
    console.log('Selected Descriptions D:', selectedDescriptionsD);
    console.log('Start Date:', startDate);
    console.log('Finish Date:', finishDate);
    console.log('Contract Price:', contractPrice);
    console.log('Paid Deposit:', paidDeposit);
    console.log('Fifty Point:', fiftyPoint);
    

    // 将 owner 名字应用到相应的元素上
    const ownerNameElement = document.querySelector('.ownerName');
    if (ownerNameElement) {
        ownerNameElement.textContent = ownerName;
    }

    // 将 owner Address 应用到相应的元素上
    const ownerAddressElement = document.querySelector('.ownerAddress');
    if (ownerAddressElement) {
        ownerAddressElement.textContent = ownerAddress;
    }

    // 将 home phone 应用到相应的元素上
    const homePhoneElement = document.querySelector('.homePhone');
    if (homePhoneElement) {
        homePhoneElement.textContent = homePhone;
    }

    // 将 cell phone 应用到相应的元素上
    const cellPhoneElement = document.querySelector('.cellPhone');
    if (cellPhoneElement) {
        cellPhoneElement.textContent = cellPhone;
    }

    // 将 office phone 应用到相应的元素上
    const officePhoneElement = document.querySelector('.officePhone');
    if (officePhoneElement) {
        officePhoneElement.textContent = officePhone;
    }

    // 将 email address 应用到相应的元素上
    const emailAddressElement = document.querySelector('.emailAddress');
    if (emailAddressElement) {
        emailAddressElement.textContent = emailAddress;
    }

    // 将 renovation address 应用到相应的元素上
    const renovationAddressElement = document.querySelector('.renovationAddress');
    if (renovationAddressElement) {
        renovationAddressElement.textContent = renovationAddress;
    }


    const jobNumberElement = document.querySelector('.jobNumber');
    if (jobNumberElement) {
        jobNumberElement.textContent = jobNumber;
    }

    const jobDateElement = document.querySelector('.jobDate');
    if (jobDateElement) {
        jobDateElement.textContent = jobDate;
    }

    const startDateElement = document.querySelector('.startDate');
    if (startDateElement) {
        startDateElement.textContent = startDate;
    }

    const finishDateElement = document.querySelector('.finishDate');
    if (finishDateElement) {
        finishDateElement.textContent = finishDate;
    }

    const paidDepositElement = document.querySelector('.paidDeposit');
    if (paidDepositElement) {
        paidDepositElement.textContent = paidDeposit;
    }

    const fiftyPointElement = document.querySelector('.fiftyPoint');
    if (fiftyPointElement) {
        fiftyPointElement.textContent = fiftyPoint;
    }

    const contractPriceElement = document.querySelector('.contractPrice');
    if (contractPriceElement) {
        contractPriceElement.textContent = contractPrice.toFixed(2).toLocaleString(); // 保留两位小数
    }



    // 计算价格并更新页面上相应的元素
    // const price1 = (contractPrice * 1.13 * 0.4 - 500).toFixed(2).toLocaleString();
    // const price2 = (contractPrice * 1.13 * 0.5).toFixed(2).toLocaleString();
    // const price3 = (contractPrice * 1.13 * 0.1).toFixed(2).toLocaleString();
    // const price4 = (contractPrice * 0.13).toFixed(2).toLocaleString();
    // const price5 = (contractPrice * 1.13).toFixed(2).toLocaleString();

    // document.querySelector('.price1').textContent = price1;
    // document.querySelector('.price2').textContent = price2;
    // document.querySelector('.price3').textContent = price3;
    // document.querySelector('.price4').textContent = price4;
    // document.querySelector('.price5').textContent = price5;

    // 计算价格并更新页面上相应的元素

    const deposit = parseFloat(document.querySelector('.paidDeposit').textContent);

    const price1 = (contractPrice * 1.13 * 0.4 - deposit);
    const price2 = (contractPrice * 1.13 * 0.5);
    const price3 = (contractPrice * 1.13 * 0.1);
    const price4 = (contractPrice * 0.13);
    const price5 = (contractPrice * 1.13);

    document.querySelector('.price1').textContent = price1.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.querySelector('.price2').textContent = price2.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.querySelector('.price3').textContent = price3.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.querySelector('.price4').textContent = price4.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.querySelector('.price5').textContent = price5.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    // 将合同价格转换为对应的英文金额表示法
    const contractPriceWord = numberToWords(contractPrice);
    document.querySelector('.contractPriceWord').textContent = contractPriceWord.toUpperCase(); // 转换为大写字母

    // 清空描述列表A
    const descriptionListA = document.querySelector('.aDescription');
    descriptionListA.innerHTML = '';
    // 创建并添加选中的描述到描述列表A中
    selectedDescriptionsA.forEach(description => {
        const listItem = document.createElement('li');
        listItem.textContent = description;
        descriptionListA.appendChild(listItem);
    });

    // 清空描述列表B
    const descriptionListB = document.querySelector('.bDescription');
    descriptionListB.innerHTML = '';
    // 创建并添加选中的描述到描述列表B中
    selectedDescriptionsB.forEach(description => {
        const listItem = document.createElement('li');
        listItem.textContent = description;
        descriptionListB.appendChild(listItem);
    });

    // 清空描述列表C
    const descriptionListC = document.querySelector('.cDescription');
    descriptionListC.innerHTML = '';
    // 创建并添加选中的描述到描述列表C中
    selectedDescriptionsC.forEach(description => {
        const listItem = document.createElement('li');
        listItem.textContent = description;
        descriptionListC.appendChild(listItem);
    });

    // 清空描述列表D
    const descriptionListD = document.querySelector('.dDescription');
    descriptionListD.innerHTML = '';
    // 创建并添加选中的描述到描述列表D中
    selectedDescriptionsD.forEach(description => {
        const listItem = document.createElement('li');
        listItem.textContent = description;
        descriptionListD.appendChild(listItem);
    });
});
// 数字转换为对应的英文金额表示法

function numberToWords(number) {
    // 定义数字到文字的映射
    const ones = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    const teens = ['', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'];
    const tens = ['', 'TEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'];

    // 函数以百位为单位进行递归转换
    function convertHundreds(num) {
        if (num >= 100) {
            return ones[Math.floor(num / 100)] + ' HUNDRED ' + convertTens(num % 100);
        } else {
            return convertTens(num);
        }
    }

    // 函数将十位和个位转换为文字
    function convertTens(num) {
        if (num < 10) return ones[num];
        else if (num >= 11 && num <= 19) return teens[num - 10];
        else {
            return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
        }
    }

    // 主函数
    if (number === 0) {
        return 'ZERO DOLLARS';
    } else {
        const strNumber = number.toString();
        const numDigits = strNumber.length;
        let words = '';
        let num = parseInt(strNumber);

        if (numDigits > 3 && numDigits <= 6) {
            if (Math.floor(num / 1000) > 0) {
                words += convertHundreds(Math.floor(num / 1000)) + ' THOUSAND ';
                num %= 1000;
            }
        } else if (numDigits > 6 && numDigits <= 9) {
            if (Math.floor(num / 1000000) > 0) {
                words += convertHundreds(Math.floor(num / 1000000)) + ' MILLION ';
                num %= 1000000;
            }
            if (Math.floor(num / 1000) > 0) {
                words += convertHundreds(Math.floor(num / 1000)) + ' THOUSAND ';
                num %= 1000;
            }
        }

        words += convertHundreds(num);
        return words + ' DOLLARS';
    }
}


