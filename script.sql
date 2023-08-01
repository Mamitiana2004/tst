drop database messagerie;
create database messagerie;
\c messagerie

create table utilisateur(
    id serial PRIMARY key,
    identifiant varchar(255) not null,
    password text not null
);

create table utilisateur_info(
    idUtilisateur int references utilisateur(id),
    nom varchar(255) not null,
    prenom varchar(255) not null,
    pseudo varchar(255) not null,
    email varchar(255) not null
);