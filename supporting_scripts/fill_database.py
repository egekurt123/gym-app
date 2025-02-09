import mysql.connector
from mysql.connector import errorcode

cursor = None
cnx = None

try:
  cnx = mysql.connector.connect(
    user='root',
    password='',
    host='127.0.0.1',
    database='gymapp',
    auth_plugin='mysql_native_password'
  )
  cursor = cnx.cursor()

  cursor.execute("""
    INSERT INTO exercise (id, category, exercise_name)
    VALUES
        (1,  'Push', 'Bench Press'),
        (2,  'Push', 'Dumbbell Bench Press'),
        (3,  'Push', 'Incline Dumbbell Press'),
        (4,  'Pull', 'Seated Cable Row'),
        (5,  'Legs', 'Squats'),
        (6,  'Legs', 'Leg Press'),
        (7,  'Push', 'Shoulder Press'),
        (8,  'Push', 'Lateral Raise'),
        (9,  'Pull', 'T-Bar Row'),
        (10, 'Abs',  'Crunches'),
        (11, 'Pull', 'Dumbbell Curl'),
        (12, 'Pull', 'Barbell Curl'),
        (13, 'Push', 'Triceps Pushdown')
  """)

  cnx.commit()

  cursor.execute("""
    INSERT INTO entry (id, exercise, sets, weights, reps, date)
    VALUES
      /* --- 1st Week: Mon 2025-01-06 (Push + Abs) --- */
      (1,  'Bench Press',             4, '80 kg',  '10', '2025-01-06'),
      (2,  'Dumbbell Bench Press',    4, '22 kg',  '10', '2025-01-06'),
      (3,  'Incline Dumbbell Press',  4, '20 kg',  '10', '2025-01-06'),
      (4,  'Shoulder Press',          4, '40 kg',  '10', '2025-01-06'),
      (5,  'Lateral Raise',           4, '8 kg',   '12', '2025-01-06'),
      (6,  'Triceps Pushdown',        4, '25 kg',  '12', '2025-01-06'),
      (7,  'Crunches',                3, 'BW',     '15', '2025-01-06'),
      (8,  'Planks',                  3, 'BW',     '45s','2025-01-06'),

      /* 1st Week: Wed 2025-01-08 (Pull) */
      (9,  'Seated Cable Row',        4, '50 kg',  '10', '2025-01-08'),
      (10, 'T-Bar Row',               4, '40 kg',  '10', '2025-01-08'),
      (11, 'Dumbbell Curl',           4, '10 kg',  '10', '2025-01-08'),
      (12, 'Barbell Curl',            4, '30 kg',  '10', '2025-01-08'),

      /* 1st Week: Fri 2025-01-10 (Legs) */
      (13, 'Squats',                  4, '80 kg',  '10', '2025-01-10'),
      (14, 'Leg Press',               4, '120 kg', '10', '2025-01-10'),

      /* --- 2nd Week: Mon 2025-01-13 (Push + Abs) --- */
      (15, 'Bench Press',             4, '82 kg',  '10', '2025-01-13'),
      (16, 'Dumbbell Bench Press',    4, '24 kg',  '10', '2025-01-13'),
      (17, 'Incline Dumbbell Press',  4, '22 kg',  '10', '2025-01-13'),
      (18, 'Shoulder Press',          4, '42 kg',  '10', '2025-01-13'),
      (19, 'Lateral Raise',           4, '9 kg',   '12', '2025-01-13'),
      (20, 'Triceps Pushdown',        4, '27 kg',  '12', '2025-01-13'),
      (21, 'Crunches',                3, 'BW',     '15', '2025-01-13'),
      (22, 'Planks',                  3, 'BW',     '45s','2025-01-13'),

      /* 2nd Week: Wed 2025-01-15 (Pull) */
      (23, 'Seated Cable Row',        4, '52 kg',  '10', '2025-01-15'),
      (24, 'T-Bar Row',               4, '42 kg',  '10', '2025-01-15'),
      (25, 'Dumbbell Curl',           4, '12 kg',  '10', '2025-01-15'),
      (26, 'Barbell Curl',            4, '32 kg',  '10', '2025-01-15'),

      /* 2nd Week: Fri 2025-01-17 (Legs) */
      (27, 'Squats',                  4, '85 kg',  '10', '2025-01-17'),
      (28, 'Leg Press',               4, '130 kg', '10', '2025-01-17'),

      /* --- 3rd Week: Mon 2025-01-20 (Push + Abs) --- */
      (29, 'Bench Press',             4, '84 kg',  '10', '2025-01-20'),
      (30, 'Dumbbell Bench Press',    4, '26 kg',  '10', '2025-01-20'),
      (31, 'Incline Dumbbell Press',  4, '24 kg',  '10', '2025-01-20'),
      (32, 'Shoulder Press',          4, '44 kg',  '10', '2025-01-20'),
      (33, 'Lateral Raise',           4, '10 kg',  '12', '2025-01-20'),
      (34, 'Triceps Pushdown',        4, '29 kg',  '12', '2025-01-20'),
      (35, 'Crunches',                3, 'BW',     '15', '2025-01-20'),
      (36, 'Planks',                  3, 'BW',     '45s','2025-01-20'),

      /* 3rd Week: Wed 2025-01-22 (Pull) */
      (37, 'Seated Cable Row',        4, '54 kg',  '10', '2025-01-22'),
      (38, 'T-Bar Row',               4, '44 kg',  '10', '2025-01-22'),
      (39, 'Dumbbell Curl',           4, '14 kg',  '10', '2025-01-22'),
      (40, 'Barbell Curl',            4, '34 kg',  '10', '2025-01-22'),

      /* 3rd Week: Fri 2025-01-24 (Legs) */
      (41, 'Squats',                  4, '90 kg',  '10', '2025-01-24'),
      (42, 'Leg Press',               4, '140 kg', '10', '2025-01-24'),

      /* --- 4th Week: Mon 2025-01-27 (Push + Abs) --- */
      (43, 'Bench Press',             4, '86 kg',  '10', '2025-01-27'),
      (44, 'Dumbbell Bench Press',    4, '28 kg',  '10', '2025-01-27'),
      (45, 'Incline Dumbbell Press',  4, '26 kg',  '10', '2025-01-27'),
      (46, 'Shoulder Press',          4, '46 kg',  '10', '2025-01-27'),
      (47, 'Lateral Raise',           4, '11 kg',  '12', '2025-01-27'),
      (48, 'Triceps Pushdown',        4, '31 kg',  '12', '2025-01-27'),
      (49, 'Crunches',                3, 'BW',     '15', '2025-01-27'),
      (50, 'Planks',                  3, 'BW',     '45s','2025-01-27')
      """)
  cnx.commit()

except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Invalid username or password.")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist.")
  else:
    print("Database error:", err)
finally:
  if cursor is not None:
    cursor.close()
  if cnx is not None and cnx.is_connected():
    cnx.close()
