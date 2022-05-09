

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
(first_name, last_name, job_title, departmentsId, rolesId, managerId)
VALUES
  ('Ronald', 'Firbank', 'Manager', 1, 1, NULL),
  ('Virginia', 'Woolf', 'Manager', 1, 1, NULL),
  ('Piers', 'Gaveston', 'Manager', 2, 1, NULL),
  ('Charles', 'LeRoi', 'Maintenance Mechanic', 1, 3, 1),
  ('Katherine', 'Mansfield', 'Operator', 1, 4, 1),
  ('Dora', 'Carrington', 'Warehouse', 1, 5, 1),
  ('Edward', 'Bellamy', 'Utility Mechanic', 1, 6, 1),
  ('Montague', 'Summers', 'Office Assistant', 2, 7, 1),
  ('Octavia', 'Butler', 'Generalist', 2, 3, 1),
  ('Unica', 'Zurn', 'Operator', 1, 3, 1);

--   INSERT INTO managers
-- (first_name, last_name, title)
-- VALUES
--   ('Donna', 'Godchaux', 'Operations Manager'),
--   ('Janis', 'Joplin', 'Human Resources Manager'),
--   ('Amy', 'Lee', 'Maintenance Manager');