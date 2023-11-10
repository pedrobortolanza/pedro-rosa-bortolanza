document.addEventListener('DOMContentLoaded', function () {
    var table = document.querySelector('table');
    var rows = table.querySelectorAll('tr');

    rows.forEach(function (row, index) {
        if (index === 0) {
            return;
        }

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function () {
            deleteRow(index);
        });


        var actionsCell = document.createElement('td');
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        deleteButton.style.margin = '0px';
        deleteButton.style.padding = '5px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.backgroundColor = '#dc3545';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.borderRadius = '5px';
    });


    var addRowForm = document.createElement('form');
    addRowForm.innerHTML = `
    <label for="imovel">Imóvel:</label>
    <input type="text" id="imovel" required>
    <label for="valor">Valor:</label>
    <input type="text" id="valor" required>
    <label for="endereco">Endereço:</label>
    <input type="text" id="endereco" required>
    <label for="telefone">Telefone:</label>
    <input type="text" id="telefone" required>
    <label for="area">Área (m²):</label>
    <input type="text" id="area" required>
    <label for="quartos">Nº Quartos:</label>
    <input type="text" id="quartos" required>
    <label for="disponibilidade">Disponibilidade:</label>
    <input type="text" id="disponibilidade" required>
    <button type="button" onclick="addRow()">Adicionar</button>
`;

    addRowForm.style.display = 'flex';
    addRowForm.style.alignItems = 'center';

    var labels = addRowForm.querySelectorAll('label');
    labels.forEach(function (label) {
        label.style.marginLeft = '20px'
        label.style.marginRight = '10px';
        label.style.color = 'white';
    });

    var inputs = addRowForm.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.style.width = '150px';
        input.style.padding = '8px';
        input.style.boxSizing = 'border-box';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '4px';
    });

    var button = addRowForm.querySelector('button');
    button.style.padding = '8px';
    button.style.marginLeft = '15px'
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#32a4e6';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';

    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = 'lightBlue';
    });

    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = '#32a4e6';
    });

    document.body.appendChild(addRowForm);

    window.addRow = function () {
        var newRow = table.insertRow();

        newRow.innerHTML = `
                <td>${document.getElementById('imovel').value}</td>
                <td>${document.getElementById('valor').value}</td>
                <td>${document.getElementById('endereco').value}</td>
                <td>${document.getElementById('telefone').value}</td>
                <td>${document.getElementById('area').value}</td>
                <td>${document.getElementById('quartos').value}</td>
                <td>${document.getElementById('disponibilidade').value}</td>
            `;


        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function () {
            deleteRow(newRow.rowIndex);
        });

        var actionsCell = document.createElement('td');
        actionsCell.appendChild(deleteButton);

        newRow.appendChild(actionsCell);

        addRowForm.reset();

        deleteButton.style.margin = '0px';
        deleteButton.style.padding = '5px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.backgroundColor = '#dc3545';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.borderRadius = '5px';
    };

    function deleteRow(index) {
        if (confirm('Deseja realmente excluir esta linha?')) {
            table.deleteRow(index);
        }
    }
});