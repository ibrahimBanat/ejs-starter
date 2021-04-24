DROP TABLE IF EXISTS records;
CREATE TABLE records (
    country VARCHAR(255), confirmed NUMERIC(20, 14), deaths NUMERIC(20, 14), recovered NUMERIC(20, 14), date VARCHAR(255)
);
