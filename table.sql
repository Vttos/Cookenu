CREATE TABLE
    cookenu_users(
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    cookenu_recipes(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        data_criacao DATE,
        id_user VARCHAR(255),
        FOREIGN KEY (id_user) REFERENCES cookenu_users(id)
    );

CREATE TABLE
    cookenu_following(
        id VARCHAR(255) PRIMARY KEY,
        id_user VARCHAR(255),
        id_seguido VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_user) REFERENCES cookenu_users(id),
        FOREIGN KEY (id_seguido) REFERENCES cookenu_users(id)
    );

DESCRIBE cookenu_users 