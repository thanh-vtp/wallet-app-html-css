window.onload = function () {
    tinhTien();
}

function tinhTien() {
    // Lấy các input chứa số tiền của các nhiệm vụ
    var mission1 = document.getElementById("money-misson-1");
    var mission2 = document.getElementById("money-misson-2");
    var mission3 = document.getElementById("money-misson-3");
    var mission4 = document.getElementById("money-misson-4");

    // Tạo số tiền ngẫu nhiên từ 100.000 đến 1.000.000 đ cho nhiệm vụ 1
    var mission1Value = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
    mission1.value = mission1Value;

    // Tạo số tiền ngẫu nhiên từ 200.000 đến 2.000.000 đ cho nhiệm vụ 2
    var mission2Value = Math.floor(Math.random() * (2000000 - 200000 + 1)) + 200000;
    mission2.value = mission2Value;

    // Tạo số tiền ngẫu nhiên từ 300.000 đến 3.000.000 đ cho nhiệm vụ 3
    var mission3Value = Math.floor(Math.random() * (3000000 - 300000 + 1)) + 300000;
    mission3.value = mission3Value;

    // Tạo số tiền ngẫu nhiên từ 400.000 đến 4.000.000 đ cho nhiệm vụ 4
    var mission4Value = Math.floor(Math.random() * (4000000 - 400000 + 1)) + 400000;
    mission4.value = mission4Value;

    // Tính tổng các số tiền
    var totalMoney = mission1Value + mission2Value + mission3Value + mission4Value;

    // Gán giá trị của totalMoney vào input detail-money
    var detailMoney = document.getElementById('detail-money');
    detailMoney.value = totalMoney;
}

function Tatca() {
    // Lấy giá trị hiện tại của số tiền từ input detail-money
    var currentMoney = parseFloat(document.getElementById('detail-money').value);

    // Gán giá trị của currentMoney vào input amount-money
    var amountMoney = document.getElementById('amount-money');
    amountMoney.value = currentMoney;
}

function Ruttien() {
    // Lấy số tiền được nhập bởi người dùng và số tiền chi tiêu
    const amountInput = document.getElementById('amount-money');
    const amount = parseFloat(amountInput.value.replace(/[^\d.-]/g, ''));
    const currentMoney = parseFloat(document.getElementById('detail-money').value.replace(/[^\d.-]/g, ''));

     // Kiểm tra số tiền muốn rút
     if (isNaN(amount) || amount <= 1000) {
        if (currentMoney <= 0) {
            // alert('Ví của bạn đã hết tiền. Vui lòng nạp thêm tiền vào ví để tiếp tục sử dụng.');
            Swal.fire({
                title: 'Thông báo',
                html: `Ví của bạn đã hết tiền. <br> Vui lòng nạp thêm tiền vào ví để tiếp tục sử dụng.`,
                icon: 'warning',
                confirmButtonText: 'Đồng ý',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    htmlContainer: 'custom-swal-html-container',
                    confirmButton: 'custom-swal-confirm-button'
                }
            })
        } else {
            // alert('Số tiền muốn rút phải là số dương lớn hơn 1000 đồng!');
            Swal.fire({
                title: 'Thông báo',
                html: `Số tiền muốn rút phải lớn hơn 1000 đồng!`,
                icon: 'error',
                confirmButtonText: 'Đồng ý',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    htmlContainer: 'custom-swal-html-container',
                    confirmButton: 'custom-swal-confirm-button'
                }
            })
        }
        amountInput.value = '';
        amountInput.focus();
        return;
    }

    // Trừ số tiền muốn rút vào số tiền chi tiêu
    if (amount > currentMoney) {
        // alert('Số tiền muốn rút lớn hơn số tiền hiện có!');
        Swal.fire({
            title: 'Thông báo',
            html: `Số tiền muốn rút lớn hơn số tiền hiện có!`,
            icon: 'info',
            confirmButtonText: 'Đồng ý',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                htmlContainer: 'custom-swal-html-container',
                confirmButton: 'custom-swal-confirm-button'
            }
        })
        return;
    }
    const newMoney = currentMoney - amount;

    // Hiển thị thông báo số tiền đã rút
    // alert(`Bạn đã rút ${amount.toLocaleString()} đồng`);
    Swal.fire({
        title: 'Thông báo',
        html: `Bạn đã rút thành công ${amount.toLocaleString()} đồng`,
        icon: 'success',
        confirmButtonText: 'Đồng ý',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html-container',
            confirmButton: 'custom-swal-confirm-button'
        }
    })

    // Cập nhật số tiền còn lại
    document.getElementById('detail-money').value = newMoney.toFixed(0);

    // Kiểm tra số tiền còn lại trong ví
    if (newMoney <= 0) {
        setTimeout(() => {
            // alert('Ví của bạn đã hết tiền. Vui lòng nạp thêm tiền vào ví để tiếp tục sử dụng.');
            Swal.fire({
                title: 'Thông báo',
                html: `Ví của bạn đã hết tiền. <br> Vui lòng nạp thêm tiền vào ví để tiếp tục sử dụng.`,
                icon: 'warning',
                confirmButtonText: 'Đồng ý',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    htmlContainer: 'custom-swal-html-container',
                    confirmButton: 'custom-swal-confirm-button'
                }
            })
        }, 2000);
    }

    // Reset giá trị của số tiền muốn rút về 0
    amountInput.value = '';
}





function Misson1() {
    const currentMoney = parseFloat(document.getElementById("money-misson-1").value);
    Swal.fire({
        title: 'Thông tin nhiệm vụ',
        html: `Mã nhiệm vụ: 1234 <br>
        Tên nhiệm vụ: Like <br>
        Thời gian hoàn thành: 26-04-2023 <br>
        Trạng thái: Hoàn thành <br>
        Số tiền nhận được: ${currentMoney.toFixed(0)} đồng <br>`,
        icon: 'success',
        confirmButtonText: 'Đồng ý',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html-container',
            confirmButton: 'custom-swal-confirm-button'
        }
    })
}

function Misson2() {
    const currentMoney = parseFloat(document.getElementById("money-misson-2").value);
    Swal.fire({
        title: 'Thông tin nhiệm vụ',
        html: `Mã nhiệm vụ: 1234 <br>
        Tên nhiệm vụ: Like <br>
        Thời gian hoàn thành: 26-04-2023 <br>
        Trạng thái: Hoàn thành <br>
        Số tiền nhận được: ${currentMoney.toFixed(0)} đồng <br>`,
        icon: 'success',
        confirmButtonText: 'Đồng ý',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html-container',
            confirmButton: 'custom-swal-confirm-button'
        }
    })
}
function Misson3() {
    const currentMoney = parseFloat(document.getElementById("money-misson-3").value);
    Swal.fire({
        title: 'Thông tin nhiệm vụ',
        html: `Mã nhiệm vụ: 1234 <br>
        Tên nhiệm vụ: Like <br>
        Thời gian hoàn thành: 26-04-2023 <br>
        Trạng thái: Hoàn thành <br>
        Số tiền nhận được: ${currentMoney.toFixed(0)} đồng <br>`,
        icon: 'success',
        confirmButtonText: 'Đồng ý',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html-container',
            confirmButton: 'custom-swal-confirm-button'
        }
    })
}
function Misson4() {
    const currentMoney = parseFloat(document.getElementById("money-misson-4").value);
    Swal.fire({
        title: 'Thông tin nhiệm vụ',
        html: `Mã nhiệm vụ: 1234 <br>
        Tên nhiệm vụ: Like <br>
        Thời gian hoàn thành: 26-04-2023 <br>
        Trạng thái: Hoàn thành <br>
        Số tiền nhận được: ${currentMoney.toFixed(0)} đồng <br>`,
        icon: 'success',
        confirmButtonText: 'Đồng ý',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html-container',
            confirmButton: 'custom-swal-confirm-button'
        }
    })
}