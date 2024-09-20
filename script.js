document.getElementById('voucherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const voucherDetails = document.getElementById('voucherDetails');
    const errorMessage = document.getElementById('errorMessage');
    const voucherCodeElem = document.getElementById('voucherCode');
    const expiryDateElem = document.getElementById('expiryDate');
    const statusElem = document.getElementById('status');
    
    voucherDetails.classList.add('hidden');
    errorMessage.classList.add('hidden');
    
    fetch(`https://api.teeg.cloud/vouchers/campaigns/SEZ02BK/cards/${cardNumber}?tz=PLT6ECUCGU`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzIzOTczMzMzLCJuYmYiOjE3MjM5NzI0MzMsImlwQWRkcmVzcyI6IjE4MC4yNDkuMTg0LjEyMSIsIm9pZCI6ImRiYWI3NjA1LTRjMjItNDExMy1hZDE5LTE3N2Y4NjkwZThiYSIsInN1YiI6ImRiYWI3NjA1LTRjMjItNDExMy1hZDE5LTE3N2Y4NjkwZThiYSIsInBob25lIjoiKzYyODIxMzExMDY2MDciLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6IjMwNDYwY2YxLTUwYWEtNGM3ZS1iNTAwLWFkODIyYzA1NTAyMSIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzIzOTcyNDMzfQ.U-oV17Fwr2DhMgjLzdNvrm0FytBB9kHLE-M0xw5q3te1TOV6A9erf65lBwkrXW_bwAXrfpVWmH9y7F6a9m3kdFw7_XIZ08o3Zi4YpsfNXsm5TX501HE65tL1mbfSewkM1g6UvmYvYFa6LV5Isy-V7DARmGPj4-n74QJ7OTzCtdyti3eaDeNkHzCRJ_kt33uEW2TuqiG6uen3imIA4l40oIM15z7wIXp1-f_moIDWcG8M_bWTnkUzqBbrECN5ICdAVeI6Fdf-9aC1I-FqIlS-mdqMwgu2LJ3XHIXYHrCtip508EoNF3I3EY3krROKhnUYHB-a1IqHNmb-lZcOvwtMPw'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.voucherCode && data.expiryDate && data.status) {
            voucherCodeElem.textContent = data.voucherCode;
            expiryDateElem.textContent = data.expiryDate;
            statusElem.textContent = data.status;
            voucherDetails.classList.remove('hidden');
        } else {
            throw new Error('Invalid response data');
        }
    })
    .catch(error => {
        errorMessage.classList.remove('hidden');
    });
});
