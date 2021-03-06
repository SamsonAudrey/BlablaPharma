PGDMP     7    9                w            bbp_db    12.0    12.0 1    b           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            c           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            d           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            e           1262    16464    bbp_db    DATABASE     �   CREATE DATABASE bbp_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';
    DROP DATABASE bbp_db;
                postgres    false            �            1259    16552    account_id_seq    SEQUENCE        CREATE SEQUENCE public.account_id_seq
    START WITH 6
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 %   DROP SEQUENCE public.account_id_seq;
       public          postgres    false            �            1259    16564    account    TABLE     �  CREATE TABLE public.account (
    "createdAt" bigint,
    "updatedAt" bigint,
    id integer DEFAULT nextval('public.account_id_seq'::regclass) NOT NULL,
    picture text,
    first_name text,
    last_name text,
    birth_day_date text,
    gender text,
    role text,
    email text,
    email_token text,
    new_email text,
    new_email_token text,
    new_email_token_expiration real,
    password text,
    password_recovery_token text,
    password_recovery_token_expiration real
);
    DROP TABLE public.account;
       public         heap    postgres    false    202            �            1259    16628    account_text    TABLE     g   CREATE TABLE public.account_text (
    id integer NOT NULL,
    full_text text,
    vector tsvector
);
     DROP TABLE public.account_text;
       public         heap    postgres    false            �            1259    16554    archive_id_seq    SEQUENCE        CREATE SEQUENCE public.archive_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 %   DROP SEQUENCE public.archive_id_seq;
       public          postgres    false            �            1259    16577    archive    TABLE     �   CREATE TABLE public.archive (
    id integer DEFAULT nextval('public.archive_id_seq'::regclass) NOT NULL,
    "createdAt" bigint,
    "fromModel" text,
    "originalRecord" json,
    "originalRecordId" json
);
    DROP TABLE public.archive;
       public         heap    postgres    false    203            �            1259    16556    conversation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.conversation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 *   DROP SEQUENCE public.conversation_id_seq;
       public          postgres    false            �            1259    16586    conversation    TABLE     �   CREATE TABLE public.conversation (
    "createdAt" bigint,
    "updatedAt" bigint,
    id integer DEFAULT nextval('public.conversation_id_seq'::regclass) NOT NULL
);
     DROP TABLE public.conversation;
       public         heap    postgres    false    204            �            1259    16558    conversation_member_id_seq    SEQUENCE     �   CREATE SEQUENCE public.conversation_member_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.conversation_member_id_seq;
       public          postgres    false            �            1259    16592    conversation_member    TABLE     �   CREATE TABLE public.conversation_member (
    "createdAt" bigint,
    "updatedAt" bigint,
    id integer DEFAULT nextval('public.conversation_member_id_seq'::regclass) NOT NULL,
    conversation integer,
    account integer
);
 '   DROP TABLE public.conversation_member;
       public         heap    postgres    false    205            �            1259    16560    message_id_seq    SEQUENCE        CREATE SEQUENCE public.message_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 %   DROP SEQUENCE public.message_id_seq;
       public          postgres    false            �            1259    16598    message    TABLE     �   CREATE TABLE public.message (
    "createdAt" bigint,
    "updatedAt" bigint,
    id integer DEFAULT nextval('public.message_id_seq'::regclass) NOT NULL,
    type text,
    content text,
    read boolean,
    author integer,
    conversation integer
);
    DROP TABLE public.message;
       public         heap    postgres    false    206            �            1259    16562    pharmacist_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pharmacist_id_seq
    START WITH 3
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 (   DROP SEQUENCE public.pharmacist_id_seq;
       public          postgres    false            �            1259    16607 
   pharmacist    TABLE     c  CREATE TABLE public.pharmacist (
    "createdAt" bigint,
    "updatedAt" bigint,
    id integer DEFAULT nextval('public.pharmacist_id_seq'::regclass) NOT NULL,
    professional_id text,
    profession_label text,
    institution_name text,
    address text,
    postal_code text,
    city text,
    verified boolean,
    warn real,
    account integer
);
    DROP TABLE public.pharmacist;
       public         heap    postgres    false    207            �            1259    16620    pharmacist_text    TABLE     j   CREATE TABLE public.pharmacist_text (
    id integer NOT NULL,
    full_text text,
    vector tsvector
);
 #   DROP TABLE public.pharmacist_text;
       public         heap    postgres    false            �            1259    16638    refreshtoken    TABLE     �   CREATE TABLE public.refreshtoken (
    "createdAt" bigint,
    "updatedAt" bigint NOT NULL,
    id bigint NOT NULL,
    token text,
    "expireAt" bigint,
    account integer
);
     DROP TABLE public.refreshtoken;
       public         heap    postgres    false            �            1259    16647    refreshtoken_id_seq    SEQUENCE     �   ALTER TABLE public.refreshtoken ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.refreshtoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            V          0    16564    account 
   TABLE DATA             COPY public.account ("createdAt", "updatedAt", id, picture, first_name, last_name, birth_day_date, gender, role, email, email_token, new_email, new_email_token, new_email_token_expiration, password, password_recovery_token, password_recovery_token_expiration) FROM stdin;
    public          postgres    false    208   �9       ]          0    16628    account_text 
   TABLE DATA           =   COPY public.account_text (id, full_text, vector) FROM stdin;
    public          postgres    false    215   `;       W          0    16577    archive 
   TABLE DATA           e   COPY public.archive (id, "createdAt", "fromModel", "originalRecord", "originalRecordId") FROM stdin;
    public          postgres    false    209   �;       X          0    16586    conversation 
   TABLE DATA           D   COPY public.conversation ("createdAt", "updatedAt", id) FROM stdin;
    public          postgres    false    210   �;       Y          0    16592    conversation_member 
   TABLE DATA           b   COPY public.conversation_member ("createdAt", "updatedAt", id, conversation, account) FROM stdin;
    public          postgres    false    211   �;       Z          0    16598    message 
   TABLE DATA           j   COPY public.message ("createdAt", "updatedAt", id, type, content, read, author, conversation) FROM stdin;
    public          postgres    false    212   <       [          0    16607 
   pharmacist 
   TABLE DATA           �   COPY public.pharmacist ("createdAt", "updatedAt", id, professional_id, profession_label, institution_name, address, postal_code, city, verified, warn, account) FROM stdin;
    public          postgres    false    213   6<       \          0    16620    pharmacist_text 
   TABLE DATA           @   COPY public.pharmacist_text (id, full_text, vector) FROM stdin;
    public          postgres    false    214   S<       ^          0    16638    refreshtoken 
   TABLE DATA           `   COPY public.refreshtoken ("createdAt", "updatedAt", id, token, "expireAt", account) FROM stdin;
    public          postgres    false    216   p<       f           0    0    account_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.account_id_seq', 9, true);
          public          postgres    false    202            g           0    0    archive_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.archive_id_seq', 1, false);
          public          postgres    false    203            h           0    0    conversation_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.conversation_id_seq', 1, false);
          public          postgres    false    204            i           0    0    conversation_member_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.conversation_member_id_seq', 1, false);
          public          postgres    false    205            j           0    0    message_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.message_id_seq', 1, false);
          public          postgres    false    206            k           0    0    pharmacist_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.pharmacist_id_seq', 3, false);
          public          postgres    false    207            l           0    0    refreshtoken_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.refreshtoken_id_seq', 3, true);
          public          postgres    false    217            �
           2606    16574    account account_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.account DROP CONSTRAINT account_email_key;
       public            postgres    false    208            �
           2606    16576    account account_new_email_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_new_email_key UNIQUE (new_email);
 G   ALTER TABLE ONLY public.account DROP CONSTRAINT account_new_email_key;
       public            postgres    false    208            �
           2606    16572    account account_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.account DROP CONSTRAINT account_pkey;
       public            postgres    false    208            �
           2606    16635    account_text account_text_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.account_text
    ADD CONSTRAINT account_text_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.account_text DROP CONSTRAINT account_text_pkey;
       public            postgres    false    215            �
           2606    16585    archive archive_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.archive
    ADD CONSTRAINT archive_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.archive DROP CONSTRAINT archive_pkey;
       public            postgres    false    209            �
           2606    16597 ,   conversation_member conversation_member_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.conversation_member
    ADD CONSTRAINT conversation_member_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.conversation_member DROP CONSTRAINT conversation_member_pkey;
       public            postgres    false    211            �
           2606    16591    conversation conversation_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.conversation
    ADD CONSTRAINT conversation_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.conversation DROP CONSTRAINT conversation_pkey;
       public            postgres    false    210            �
           2606    16606    message message_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.message DROP CONSTRAINT message_pkey;
       public            postgres    false    212            �
           2606    16617 !   pharmacist pharmacist_account_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.pharmacist
    ADD CONSTRAINT pharmacist_account_key UNIQUE (account);
 K   ALTER TABLE ONLY public.pharmacist DROP CONSTRAINT pharmacist_account_key;
       public            postgres    false    213            �
           2606    16615    pharmacist pharmacist_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.pharmacist
    ADD CONSTRAINT pharmacist_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.pharmacist DROP CONSTRAINT pharmacist_pkey;
       public            postgres    false    213            �
           2606    16619 )   pharmacist pharmacist_professional_id_key 
   CONSTRAINT     o   ALTER TABLE ONLY public.pharmacist
    ADD CONSTRAINT pharmacist_professional_id_key UNIQUE (professional_id);
 S   ALTER TABLE ONLY public.pharmacist DROP CONSTRAINT pharmacist_professional_id_key;
       public            postgres    false    213            �
           2606    16627 $   pharmacist_text pharmacist_text_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.pharmacist_text
    ADD CONSTRAINT pharmacist_text_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.pharmacist_text DROP CONSTRAINT pharmacist_text_pkey;
       public            postgres    false    214            �
           2606    16645    refreshtoken refreshtoken_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.refreshtoken
    ADD CONSTRAINT refreshtoken_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.refreshtoken DROP CONSTRAINT refreshtoken_pkey;
       public            postgres    false    216            V   y  x����N�0E��wt����ޕ��(�>�Fl&��Ҹ!�z҇�����\�jf��/��W<'�#/���a%X�H@)�Ph hVe��q�f��ou�9���r�T$9u��0@��(N���(�mi����6�vn3�P�UC\?�'�벼�6��@Mg[��1�_��^������i���:ܯ<�@r��]�`��!�S���|��,�S�c�I��4:�����Vh0^��EA��!�G�I�^�gBn��.��͸���U�h6��~�^����Z[Q�3���<&���S�4�	���4�y*H�|I'�GTi��)�a���䩴�gˌb�~��e���|���gl���@������Z�/Ͱ��      ]   R   x�3��K,�H��+)J��KM,u(O�KL���K+R�H)�@�8�!�VF
긵�[*���խ��,Av�`c��lC� �%E�      W      x������ � �      X      x������ � �      Y      x������ � �      Z      x������ � �      [      x������ � �      \      x������ � �      ^   �   x�}̹1 ���E��zq����3�8�`�,���sz��>0S���V�}��'5�m#��=7�3	BM�� "[�g14�t�Cn_RDs�%����C����d)A��,㱣כT�K�[�@�וRz��7�     