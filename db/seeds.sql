

INSERT INTO departments
  (department_name)
VALUES
  ('Operations'),
  ('Human Resources');
  

INSERT INTO roles
  (title, salary, department_id)
VALUES
('Supervisor', 75000.00, 1),
('Maintenance', 50000.00, 1),
('Operator', 65000.00, 1),
('Warehouse', 60000.00, 1),
('Utility Mechanic',40000.00, 1),
('Office Assistant', 40000.00, 2),
('Generalist', 50000.00, 2);

INSERT INTO employees
(first_name, last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 2),
  ('Virginia', 'Woolf', 1, 2),
  ('Piers', 'Gaveston', 2, 0),
  ('Charles', 'LeRoi', 3, 1),
  ('Katherine', 'Mansfield', 4, 1),
  ('Dora', 'Carrington', 5, 0),
  ('Edward', 'Bellamy', 6, 0),
  ('Montague', 'Summers', 7, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', NULL, 1);