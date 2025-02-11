PGDMP  +                    |            postgres    16.2    16.2     t           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            u           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            v           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            w           1262    5    postgres    DATABASE     {   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE postgres;
                postgres    false            x           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4983                        2615    16397    pgagent    SCHEMA        CREATE SCHEMA pgagent;
    DROP SCHEMA pgagent;
                postgres    false            y           0    0    SCHEMA pgagent    COMMENT     6   COMMENT ON SCHEMA pgagent IS 'pgAgent system tables';
                   postgres    false    8                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            z           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2                        3079    16398    pgagent 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgagent WITH SCHEMA pgagent;
    DROP EXTENSION pgagent;
                   false    8            {           0    0    EXTENSION pgagent    COMMENT     >   COMMENT ON EXTENSION pgagent IS 'A PostgreSQL job scheduler';
                        false    3            �            1259    16583    mentors    TABLE     �  CREATE TABLE public.mentors (
    mentor_id integer NOT NULL,
    mentor_logo bytea,
    mentor_description character varying(100),
    mentor_experience character varying(10),
    mentor_area_expertise character varying(20),
    mentor_current_designation character varying(20),
    mentor_insti character varying(40),
    mentor_qualification character varying(20),
    mentor_year_of_passing character varying(20),
    mentor_starup_associated character varying(35),
    mentor_contact_number character varying(15),
    mentor_email character varying(30),
    mentor_linkedin character varying(60),
    mentor_password character varying(20),
    created_at timestamp without time zone
);
    DROP TABLE public.mentors;
       public         heap    postgres    false            �            1259    16593    resume_data    TABLE     >  CREATE TABLE public.resume_data (
    resume_name character varying(25),
    resume_email character varying(30) NOT NULL,
    college_data character varying(50),
    college_department character varying(20),
    resume_url character varying(150),
    resume_year integer,
    created_at timestamp without time zone
);
    DROP TABLE public.resume_data;
       public         heap    postgres    false            �            1259    16565 	   user_data    TABLE     @  CREATE TABLE public.user_data (
    user_id integer NOT NULL,
    user_mail character varying(50),
    user_password character varying(30),
    user_hash character varying(40),
    user_department character varying(20),
    user_role integer NOT NULL,
    created_at timestamp with time zone,
    user_name character varying(30) DEFAULT 'Nandhini K S'::character varying NOT NULL,
    user_contact character varying(20) DEFAULT '7092311114'::character varying NOT NULL,
    personal_email character varying(30) DEFAULT 'nandhini.ramu@gmail.com'::character varying NOT NULL
);
    DROP TABLE public.user_data;
       public         heap    postgres    false            �          0    16399    pga_jobagent 
   TABLE DATA           I   COPY pgagent.pga_jobagent (jagpid, jaglogintime, jagstation) FROM stdin;
    pgagent          postgres    false    222   C#       �          0    16408    pga_jobclass 
   TABLE DATA           7   COPY pgagent.pga_jobclass (jclid, jclname) FROM stdin;
    pgagent          postgres    false    224   �#       �          0    16418    pga_job 
   TABLE DATA           �   COPY pgagent.pga_job (jobid, jobjclid, jobname, jobdesc, jobhostagent, jobenabled, jobcreated, jobchanged, jobagentid, jobnextrun, joblastrun) FROM stdin;
    pgagent          postgres    false    226   �#       �          0    16466    pga_schedule 
   TABLE DATA           �   COPY pgagent.pga_schedule (jscid, jscjobid, jscname, jscdesc, jscenabled, jscstart, jscend, jscminutes, jschours, jscweekdays, jscmonthdays, jscmonths) FROM stdin;
    pgagent          postgres    false    230   �#       �          0    16494    pga_exception 
   TABLE DATA           J   COPY pgagent.pga_exception (jexid, jexscid, jexdate, jextime) FROM stdin;
    pgagent          postgres    false    232   �#       �          0    16508 
   pga_joblog 
   TABLE DATA           X   COPY pgagent.pga_joblog (jlgid, jlgjobid, jlgstatus, jlgstart, jlgduration) FROM stdin;
    pgagent          postgres    false    234   $       �          0    16442    pga_jobstep 
   TABLE DATA           �   COPY pgagent.pga_jobstep (jstid, jstjobid, jstname, jstdesc, jstenabled, jstkind, jstcode, jstconnstr, jstdbname, jstonerror, jscnextrun) FROM stdin;
    pgagent          postgres    false    228   !$       �          0    16524    pga_jobsteplog 
   TABLE DATA           |   COPY pgagent.pga_jobsteplog (jslid, jsljlgid, jsljstid, jslstatus, jslresult, jslstart, jslduration, jsloutput) FROM stdin;
    pgagent          postgres    false    236   >$       p          0    16583    mentors 
   TABLE DATA           <  COPY public.mentors (mentor_id, mentor_logo, mentor_description, mentor_experience, mentor_area_expertise, mentor_current_designation, mentor_insti, mentor_qualification, mentor_year_of_passing, mentor_starup_associated, mentor_contact_number, mentor_email, mentor_linkedin, mentor_password, created_at) FROM stdin;
    public          postgres    false    238   [$       q          0    16593    resume_data 
   TABLE DATA           �   COPY public.resume_data (resume_name, resume_email, college_data, college_department, resume_url, resume_year, created_at) FROM stdin;
    public          postgres    false    239   %       o          0    16565 	   user_data 
   TABLE DATA           �   COPY public.user_data (user_id, user_mail, user_password, user_hash, user_department, user_role, created_at, user_name, user_contact, personal_email) FROM stdin;
    public          postgres    false    237   �'       �           2606    16592 )   mentors mentors_mentor_contact_number_key 
   CONSTRAINT     u   ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_mentor_contact_number_key UNIQUE (mentor_contact_number);
 S   ALTER TABLE ONLY public.mentors DROP CONSTRAINT mentors_mentor_contact_number_key;
       public            postgres    false    238            �           2606    16589    mentors mentors_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_pkey PRIMARY KEY (mentor_id);
 >   ALTER TABLE ONLY public.mentors DROP CONSTRAINT mentors_pkey;
       public            postgres    false    238            �           2606    16597    resume_data resume_data_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.resume_data
    ADD CONSTRAINT resume_data_pkey PRIMARY KEY (resume_email);
 F   ALTER TABLE ONLY public.resume_data DROP CONSTRAINT resume_data_pkey;
       public            postgres    false    239            �           2606    16569    user_data user_data_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (user_id);
 B   ALTER TABLE ONLY public.user_data DROP CONSTRAINT user_data_pkey;
       public            postgres    false    237            �           2606    16571 !   user_data user_data_user_mail_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_user_mail_key UNIQUE (user_mail);
 K   ALTER TABLE ONLY public.user_data DROP CONSTRAINT user_data_user_mail_key;
       public            postgres    false    237            �   =   x��000�4202�50�54S04�25�2��307410�60�26�t��,Iu�������� �K      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      p   �   x�ν�0@���)����ˤ�! ��ObiR0���v�/9�PA�}�%"$K�7���\�RP� 5/<:�.���7��1P����	(e�>�/�c2p�`�A:I+o�y�<��>xh�U�=�v�:��TR�L�O������.B��-�      q   i  x�Ŗ�o�0ǟ������B������$˲6Y�C�*Epb��m�e�$M��a��w��}||������U���YU6	<�y���X�(2��MjZ�#�L�6ܔ�:r��И	�����cČ)���SEu��n���@�:p��jY��]��� ��g�>���BlA���%(�x��f�<ݶ�4�s�dݠ�����.hfM����M��H�E�>���D����f
�!�gE<��j�5;��)�'h��������'@Õ}�s+�I�V�a�Qf��C�'

�c<��o����;|C�"C1>&'��#�ނs�fv3I�e���9hsO���C���{�G���s���83��D��V�>�>���������mG��M2_@p7EI�2������a��bm�SEc����`�Nʷ+H�,g�ʝ铳6�'�nq#h+םp��4�@y^F_gS�z1}-��'�YZ�b��k��vG�k��R�h@��Y8Gyb�R�6���/��E�	(nK���ѯ�Z$۵(n�yϸUdշ�~��j���پ�>��1������ի�j;���~]�7����ng^韓��/�S�����v:�_�6�      o   �   x�M�=o�0E�ǯ`膰��`��UX�n]�`��ڨ`D��MR��n���T E� �h;7�j��"ާ@��ߋӊȹpZ�4��p�īo׶[.�)�o�/��y�;���D�3mP�	"ӚTN����}��k��V��-ⶓц��"�!d(�J�!�)����d�ՠ��,=�/���Z_<Ô���rӒ%������2u{޴�t���Xq���^m?�O�e��WP     