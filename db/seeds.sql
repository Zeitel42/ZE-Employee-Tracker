

INSERT INTO departments
  (departments_name)
VALUES
  ('Operations'),
  ('Human Resources');
  

INSERT INTO roles
  (title, salary, departmentsId)
VALUES
('Manager', 85000.00, 1),
('Maintenance Mechanic', 50000.00, 1),
('Operator', 65000.00, 1),
('Warehouse', 60000.00, 1),
('Utility Mechanic',40000.00, 1),
('Office Assistant', 40000.00, 2),
('Generalist', 50000.00, 2);

INSERT INTO employees
(first_name, last_name, rolesId, managerId)
VALUES
  ('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Woolf', 1, NULL),
  ('Piers', 'Gaveston', 1, NULL),
  ('Charles', 'LeRoi', 3, 1),
  ('Katherine', 'Mansfield', 4, 1),
  ('Dora', 'Carrington', 5, 1),
  ('Edward', 'Bellamy', 6, 1),
  ('Montague', 'Summers', 7, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', 3, 1);

