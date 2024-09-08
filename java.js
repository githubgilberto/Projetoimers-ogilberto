const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate form fields
    const fullName = document.getElementById('fullName').value;
    const cpf = document.getElementById('cpf').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const professionalCouncil = document.getElementById('professionalCouncil').value;
    const registrationNumber = document.getElementById('registrationNumber').value;
    const specialty = document.getElementById('specialty').value;
    const areasOfExpertise = document.getElementById('areasOfExpertise').value;
    const institution = document.getElementById('institution').value;
    const graduationYear = document.getElementById('graduationYear').value;
    const crmCroCrmv = document.getElementById('crmCroCrmv').value;

    const cep = document.getElementById('cep').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;
    const complement = document.getElementById('complement').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Basic validation checks (you can add more complex validation rules)
    if (fullName === '') {
        alert('O nome completo é obrigatório.');
        return;
    }

    if (cpf === '') {
        alert('O CPF é obrigatório.');
        return;
    }

    if (birthDate === '') {
        alert('A data de nascimento é obrigatória.');
        return;
    }

    if (gender === '') {
        alert('O sexo é obrigatório.');
        return;
    }

    if (phone === '') {
        alert('O telefone é obrigatório.');
        return;
    }

    if (email === '') {
        alert('O e-mail é obrigatório.');
        return;
    }

    if (professionalCouncil === '') {
        alert('O conselho profissional é obrigatório.');
        return;
    }

    if (registrationNumber === '') {
        alert('O número de registro é obrigatório.');
        return;
    }

    if (specialty === '') {
        alert('A especialidade é obrigatória.');
        return;
    }

    if (areasOfExpertise === '') {
        alert('As áreas de atuação são obrigatórias.');
        return;
    }

    if (institution === '') {
        alert('A instituição de formação é obrigatória.');
        return;
    }

    if (graduationYear === '') {
        alert('O ano de graduação é obrigatório.');
        return;
    }

    if (crmCroCrmv === '') {
        alert('O CRM/CRO/CRMV é obrigatório.');
        return;
    }

    if (cep === '') {
        alert('O CEP é obrigatório.');
        return;
    }

    if (street === '') {
        alert('O logradouro é obrigatório.');
        return;
    }

    if (number === '') {
        alert('O número é obrigatório.');
        return;
    }

    if (neighborhood === '') {
        alert('O bairro é obrigatório.');
        return;
    }

    if (city === '') {
        alert('A cidade é obrigatória.');
        return;
    }

    if (state === '') {
        alert('O estado é obrigatório.');
        return;
    }

    // Submit form if all validation checks pass
    registrationForm.submit();
});
