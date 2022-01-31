INSERT INTO departments (dept_name) VALUES ("HR");
INSERT INTO departments (dept_name) VALUES ("Accounting");
INSERT INTO departments (dept_name) VALUES ("Sales");

INSERT INTO roles (title, salary, department_id) VALUES (
    "Manager", "80000", "1"
);

INSERT INTO roles (title, salary, department_id) VALUES (
    "Human Resources", "85000", "3"
);

INSERT INTO roles (title, salary, department_id) VALUES (
    "Manager", "50000", "2"
);

INSERT INTO roles (title, salary, department_id) VALUES (
    "Sales", "47000", "1"
);

INSERT INTO roles (title, salary, department_id) VALUES (
    "IT", "22000", "2"
);

INSERT INTO roles (title, salary, department_id) VALUES (
    "President",
    "31000",
    "1"
);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
    "Phil",
    "Spencer",
    "1",
    "1"
);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
    "Bill",
    "Gates",
    "2",
    "1"
);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
    "Mark",
    "Zuk",
    "3",
    "3"
);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
    "Steve",
    "Jobs",
    "4",
    "1"
);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
    "Q",
    "Tip",
    "5",
    "3"
);

-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
--     "Pelaliah",
--     "Onesiphorus",
--     "6",
--     "3"
-- );

-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
--     "Mara",
--     "Kirjath-sannah",
--     "4",
--     "1"
-- );

-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
--     "Javan",
--     "Ishiah",
--     "5",
--     "3"
-- );

-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
--     "Hanani",
--     "Elisheba",
--     "6",
--     "3"
-- );

-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
--     "Dishan",
--     "Bathsuha",
--     "4",
--     "1"
-- );

-- INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (
--     "Asshurim",
--     "Gennesaret",
--     "5",
--     "3"
-- );