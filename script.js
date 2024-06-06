let company ={
  sales: [{name:'John',salary:1000},{name:'Alice',salary:600}],
  development:{
      web:[{name:'Peter',salary:2000},{name:'Alex',salary:1800}],
      internals:[{name:'Jack',salary:1300}],
  },
};

function totalSalaries(currentCompany) {
  if (Array.isArray(currentCompany)) {
    return currentCompany.reduce((calculated, newValue) => calculated + newValue.salary, 0);
  } else {
    let departmentSalary = 0;

    for (let department of Object.values( currentCompany )) {
      departmentSalary += totalSalaries(department);
    }

    return departmentSalary;
  }
}

console.log(totalSalaries(company));
