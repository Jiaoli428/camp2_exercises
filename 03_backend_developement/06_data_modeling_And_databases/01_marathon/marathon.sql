CREATE TABLE race (
  race_name text,
  started_date date,
  runner_name text,
  runner_bib smallint,
  runner_final_position smallint,
  racing_time time
  );

SELECT runner_name
FROM race
WHERE race_name='New York City Marathon - Woman';

SELECT runner_name
FROM race
WHERE race_name='New York City Marathon - Man'
ORDER BY runner_final_position
LIMIT 3;

SELECT runner_name
FROM race
WHERE racing_time < '2:30:00'
AND runner_bib < 100;

SELECT runner_name
FROM race
WHERE (racing_time < '2:15:00'
AND runner_bib > 100)
OR (racing_time < '2:30:00'
AND runner_bib < 100)
ORDER BY runner_bib, racing_time;

SELECT runner_name, runner_bib, runner_final_position
FROM race
WHERE race_name='New York City Marathon - Man'
AND racing_time < (
SELECT racing_time
FROM race
WHERE runner_name='Koen Naert'
);
