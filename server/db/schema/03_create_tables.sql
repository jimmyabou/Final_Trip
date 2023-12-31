DROP TABLE IF EXISTS favorite_attractions CASCADE;
DROP TABLE IF EXISTS line_items CASCADE;
DROP TABLE IF EXISTS day_attractions CASCADE;
DROP TABLE IF EXISTS days CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS packages CASCADE;
DROP TABLE IF EXISTS attractions CASCADE;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar,
  password varchar NOT NULL,
  email varchar NOT NULL,
  address varchar,
  phone_number varchar
);

CREATE TABLE attractions (
  attraction_id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  description varchar NOT NULL,
  country varchar NOT NULL,
  city varchar NOT NULL,
  latitude FLOAT,
  longitude FLOAT,
  category varchar NOT NULL,
  rating numeric NOT NULL,
  price integer NOT NULL,
  duration integer NOT NULL,
  featured boolean NOT NULL,
  booking_url text NOT NULL,
  pictures TEXT[]
);

CREATE TABLE favorite_attractions (
  user_id integer REFERENCES users (id) NOT NULL,
  attraction_id integer REFERENCES attractions (attraction_id) NOT NULL,
  PRIMARY KEY (user_id, attraction_id)
);

CREATE TABLE packages (
  package_id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users (id) NOT NULL,
  name varchar NOT NULL
);

CREATE TABLE day_attractions (
  attraction_id integer REFERENCES attractions (attraction_id) NOT NULL,
  day_id integer NOT NULL,
  PRIMARY KEY (attraction_id, day_id)
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users (id) NOT NULL,
  order_date timestamp NOT NULL,
  total_amount integer NOT NULL
);

CREATE TABLE line_items (
  lineitem_id SERIAL PRIMARY KEY,
  order_id integer REFERENCES orders (order_id) NOT NULL,
  attraction_id integer REFERENCES attractions (attraction_id) NOT NULL,
  quantity integer NOT NULL,
  price integer NOT NULL,
  created_at timestamp NOT NULL,
  number_of_people integer NOT NULL,
  attendance_date date NOT NULL
);

CREATE TABLE days (
  day_id SERIAL PRIMARY KEY,
  package_id integer REFERENCES packages (package_id) ON DELETE CASCADE NOT NULL ,
  date date NOT NULL,
  day_title varchar NOT NULL,
  day_description varchar NOT NULL
);
