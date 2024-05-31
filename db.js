db.directions.insertMany([
    { name: "Philosophy" },
    { name: "Mathematics" },
    { name: "Physics" }
]);

db.groups.insertMany([
    { group_number: "Phil-101", direction_id: ObjectId("101") },
    { group_number: "Phil-102", direction_id: ObjectId("101") },
    { group_number: "Phil-103", direction_id: ObjectId("101") },
    { group_number: "Math-201", direction_id: ObjectId("201") },
    { group_number: "Math-202", direction_id: ObjectId("201") },
    { group_number: "Math-203", direction_id: ObjectId("201") },
    { group_number: "Phys-301", direction_id: ObjectId("301") },
    { group_number: "Phys-302", direction_id: ObjectId("301") },
    { group_number: "Phys-303", direction_id: ObjectId("301") }
]);

db.students.insertMany([
    { full_name: "Ivan Ivanov", birth_date: new Date("2000-01-15"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["8976548902"], email: "ivanov@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Maria Petrova", birth_date: new Date("2000-05-20"), address: { city: "Moscow", street: "Gorkogo", house_number: "5" }, phones: ["8749568475"], email: "mpetrova@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Alexander Sidorov", birth_date: new Date("2000-08-10"), address: { city: "Moscow", street: "Pushkinskaya", house_number: "25" }, phones: ["0394857684"], email: "asidorov@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Olga Smirnova", birth_date: new Date("2001-02-01"), address: { city: "Moscow", street: "Tverskaya", house_number: "30" }, phones: ["9458689476"], email: "osmirnova@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Dmitry Egorov", birth_date: new Date("2000-11-12"), address: { city: "Moscow", street: "Arbat", house_number: "7" }, phones: ["1357986754"], email: "degorov@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Anna Kuznetsova", birth_date: new Date("2000-03-18"), address: { city: "Moscow", street: "Novaya", house_number: "2" }, phones: ["8343276859"], email: "akuznetsova@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Anna Petrova", birth_date: new Date("2002-05-20"), address: { city: "Moscow", street: "Tverskaya", house_number: "25" }, phones: ["7485643728"], email: "petrova@mail.com", group_number: "Phil-101", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Anna Ivanova", birth_date: new Date("2001-05-20"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["123456789"], email: "ivanova@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Dmitry Petrov", birth_date: new Date("2000-08-15"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["987654321"], email: "petrov@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Olga Sidorova", birth_date: new Date("2002-01-10"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["555555955"], email: "sidorova@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Dmitry Smirnov", birth_date: new Date("2001-08-15"), address: { city: "Moscow", street: "Pushkinskaya", house_number: "30" }, phones: ["282222222"], email: "smirnov@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Petr Petrov", birth_date: new Date("1999-02-20"), address: { city: "Moscow", street: "Pushkina", house_number: "15" }, phones: ["987654321"], email: "petrovv@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Svetlana Ivanova", birth_date: new Date("1999-07-10"), address: { city: "Moscow", street: "Tverskaya", house_number: "12" }, phones: ["123456789"], email: "sivanova@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Mikhail Voronov", birth_date: new Date("1998-12-05"), address: { city: "Moscow", street: "Lenina", house_number: "20" }, phones: ["555565555"], email: "mvoronov@mail.com", group_number: "Phil-102", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Elena Kozlova", birth_date: new Date("2000-04-25"), address: { city: "Moscow", street: "Gagarina", house_number: "8" }, phones: ["114111111"], email: "ekozlova@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Andrey Nikitin", birth_date: new Date("1999-09-30"), address: { city: "Moscow", street: "Novaya", house_number: "17" }, phones: ["222222232"], email: "anikitin@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Yulia Smirnova", birth_date: new Date("2000-06-08"), address: { city: "Moscow", street: "Pushkinskaya", house_number: "3" }, phones: ["332333333"], email: "ysmirnova@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "non-budget" },
    { full_name: "Sergey Sergeev", birth_date: new Date("2001-03-25"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["552555555"], email: "sergeev@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Natalia Ivanova", birth_date: new Date("2001-08-20"), address: { city: "Moscow", street: "Lenina", house_number: "18" }, phones: ["123456789"], email: "nivanova@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Denis Popov", birth_date: new Date("2000-12-10"), address: { city: "Moscow", street: "Tverskaya", house_number: "23" }, phones: ["987654321"], email: "dpopov@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Ekaterina Petrova", birth_date: new Date("2001-02-01"), address: { city: "Moscow", street: "Arbat", house_number: "6" }, phones: ["111112111"], email: "epetrova@mail.com", group_number: "Phil-103", direction_id: ObjectId("101"), tuition_type: "budget" },
    { full_name: "Marina Popova", birth_date: new Date("2001-11-30"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["444442444"], email: "popova@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Igor Petrov", birth_date: new Date("2000-09-12"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["666666626"], email: "igor@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Tatiana Egorova", birth_date: new Date("2002-02-25"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["777727777"], email: "egorova@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Ekaterina Smirnova", birth_date: new Date("2001-08-20"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["1112223334"], email: "smirnova@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Andrey Ivanov", birth_date: new Date("2000-11-15"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["5556667778"], email: "ivanov_andrey@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Nikolay Petrov", birth_date: new Date("2002-02-10"), address: { city: "Moscow", street: "Lenina", house_number: "10" }, phones: ["9990001112"], email: "petrov_nikolay@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Yulia Popova", birth_date: new Date("1999-10-05"), address: { city: "Moscow", street: "Pushkina", house_number: "15" }, phones: ["3334445556"], email: "popova_yulia@mail.com", group_number: "Math-201", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Maxim Sidorov", birth_date: new Date("2000-05-22"), address: { city: "Moscow", street: "Pushkina", house_number: "15" }, phones: ["7778889990"], email: "sidorov_maxim@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Yana Kuznetsova", birth_date: new Date("2001-12-17"), address: { city: "Moscow", street: "Pushkina", house_number: "15" }, phones: ["2223334445"], email: "kuznetsova_yana@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Anton Egorov", birth_date: new Date("2001-06-30"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["8889990001"], email: "egorov_anton@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Maria Ivanova", birth_date: new Date("2000-04-12"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["4445556667"], email: "ivanova_maria@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Vadim Petrov", birth_date: new Date("2002-09-25"), address: { city: "Moscow", street: "Gagarina", house_number: "20" }, phones: ["2223334445"], email: "petrov_vadim@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Igor Novikov", birth_date: new Date("2001-04-10"), address: { city: "Moscow", street: "Lenina", house_number: "21" }, phones: ["3216549870"], email: "novikov_igor@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Svetlana Kravchenko", birth_date: new Date("2000-11-18"), address: { city: "Moscow", street: "Lenina", house_number: "22" }, phones: ["1472583690"], email: "kravchenko_svetlana@mail.com", group_number: "Math-202", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Pavel Kuznetsov", birth_date: new Date("2002-03-24"), address: { city: "Moscow", street: "Lenina", house_number: "23" }, phones: ["9638527410"], email: "kuznetsov_pavel@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Olga Morozova", birth_date: new Date("1999-06-12"), address: { city: "Moscow", street: "Lenina", house_number: "24" }, phones: ["7418529630"], email: "morozova_olga@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Yaroslav Belov", birth_date: new Date("2001-08-19"), address: { city: "Moscow", street: "Lenina", house_number: "25" }, phones: ["8529637410"], email: "belov_yaroslav@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Elena Vasileva", birth_date: new Date("2000-12-28"), address: { city: "Moscow", street: "Lenina", house_number: "26" }, phones: ["1597534860"], email: "vasileva_elena@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Roman Lebedev", birth_date: new Date("2002-05-05"), address: { city: "Moscow", street: "Lenina", house_number: "27" }, phones: ["7531594860"], email: "lebedev_roman@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Anastasia Volkova", birth_date: new Date("2001-07-17"), address: { city: "Moscow", street: "Lenina", house_number: "28" }, phones: ["6547893210"], email: "volkova_anastasia@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "non-budget" },
    { full_name: "Dmitry Makarov", birth_date: new Date("2000-10-22"), address: { city: "Moscow", street: "Lenina", house_number: "29" }, phones: ["7894561230"], email: "makarov_dmitry@mail.com", group_number: "Math-203", direction_id: ObjectId("201"), tuition_type: "budget" },
    { full_name: "Alina Orlova", birth_date: new Date("2002-01-09"), address: { city: "Moscow", street: "Lenina", house_number: "30" }, phones: ["9517538420"], email: "orlova_alina@mail.com", group_number: "Phys-301", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Kirill Smirnov", birth_date: new Date("2001-11-13"), address: { city: "Moscow", street: "Pushkina", house_number: "11" }, phones: ["9514873260"], email: "smirnov_kirill@mail.com", group_number: "Phys-301", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Veronika Pavlova", birth_date: new Date("2000-04-04"), address: { city: "Moscow", street: "Pushkina", house_number: "12" }, phones: ["7532148690"], email: "pavlova_veronika@mail.com", group_number: "Phys-301",  direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Vladimir Semenov", birth_date: new Date("2002-08-20"), address: { city: "Moscow", street: "Pushkina", house_number: "13" }, phones: ["3574682190"], email: "semenov_vladimir@mail.com", group_number: "Phys-301", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Polina Vinogradova", birth_date: new Date("2001-02-27"), address: { city: "Moscow", street: "Pushkina", house_number: "14" }, phones: ["2135468790"], email: "vinogradova_polina@mail.com", group_number: "Phys-301", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Alexandr Fedorov", birth_date: new Date("2000-05-19"), address: { city: "Moscow", street: "Pushkina", house_number: "15" }, phones: ["8795463210"], email: "fedorov_alexandr@mail.com", group_number: "Phys-301", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Daria Alekseeva", birth_date: new Date("2002-03-16"), address: { city: "Moscow", street: "Pushkina", house_number: "16" }, phones: ["6482753190"], email: "alekseeva_daria@mail.com", group_number: "Phys-301", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Vsevolod Pavlov", birth_date: new Date("1999-08-15"), address: { city: "Moscow", street: "Lenina", house_number: "52" }, phones: ["9513573840"], email: "pavlovv_oleg@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Liliya Bogdanova", birth_date: new Date("2000-10-08"), address: { city: "Moscow", street: "Pushkina", house_number: "18" }, phones: ["7895123460"], email: "bogdanova_liliya@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Stanislav Zaitsev", birth_date: new Date("2002-12-30"), address: { city: "Moscow", street: "Pushkina", house_number: "19" }, phones: ["3571598240"], email: "zaitsev_stanislav@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Irina Nikolaeva", birth_date: new Date("2001-03-22"), address: { city: "Moscow", street: "Pushkina", house_number: "20" }, phones: ["9512486370"], email: "nikolaeva_irina@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Oleg Pavlov", birth_date: new Date("1999-06-15"), address: { city: "Moscow", street: "Gagarina", house_number: "31" }, phones: ["9513572840"], email: "pavlov_oleg@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Natalia Guseva", birth_date: new Date("2000-10-10"), address: { city: "Moscow", street: "Gagarina", house_number: "32" }, phones: ["7891236540"], email: "guseva_natalia@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Evgeny Mikhailov", birth_date: new Date("2002-02-05"), address: { city: "Moscow", street: "Gagarina", house_number: "33" }, phones: ["6547891230"], email: "mikhailov_evgeny@mail.com", group_number: "Phys-302", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Viktor Sorokin", birth_date: new Date("2000-04-25"), address: { city: "Moscow", street: "Gagarina", house_number: "35" }, phones: ["1478963250"], email: "sorokin_viktor@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Yana Romanova", birth_date: new Date("1999-11-11"), address: { city: "Moscow", street: "Gagarina", house_number: "36" }, phones: ["9517534860"], email: "romanova_yana@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Maxim Zhukov", birth_date: new Date("2001-05-21"), address: { city: "Moscow", street: "Gagarina", house_number: "37" }, phones: ["7896543210"], email: "zhukov_maxim@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Elizaveta Smirnova", birth_date: new Date("2002-06-10"), address: { city: "Moscow", street: "Gagarina", house_number: "38" }, phones: ["2589631470"], email: "smirnova_elizaveta@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Daniil Vinogradov", birth_date: new Date("2000-02-14"), address: { city: "Moscow", street: "Gagarina", house_number: "39" }, phones: ["9632587410"], email: "vinogradov_daniil@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "budget" },
    { full_name: "Tatiana Solovyova", birth_date: new Date("2001-10-18"), address: { city: "Moscow", street: "Gagarina", house_number: "40" }, phones: ["7539516240"], email: "solovyova_tatiana@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "non-budget" },
    { full_name: "Denis Frolov", birth_date: new Date("2002-03-12"), address: { city: "Moscow", street: "Gagarina", house_number: "41" }, phones: ["1596847230"], email: "frolov_denis@mail.com", group_number: "Phys-303", direction_id: ObjectId("301"), tuition_type: "budget" }
]);

db.groups.aggregate([
    { $match: { direction_id: ObjectId("...") } },
    { $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "group_id",
        as: "students"
    }},
    { $unwind: "$students" },
    { $project: {
        group_number: 1,
        student_name: "$students.full_name",
        tuition_type: "$students.tuition_type"
    }},
    { $sort: { student_name: 1 } }
]);

db.students.find({
    full_name: { $regex: "^R" }
}).project({
    full_name: 1,
    group_id: 1,
    direction_id: 1
});

db.students.aggregate([
    { $project: {
        last_name: { $arrayElemAt: [{ $split: ["$full_name", " "] }, 0] },
        birth_day: { $dayOfMonth: "$birth_date" },
        birth_month: { $month: "$birth_date" },
        group_id: 1,
        direction_id: 1
    }},
    { $sort: { birth_month: 1, birth_day: 1 } }
]);

db.students.aggregate([
    { $project: {
        full_name: 1,
        age: { $subtract: [new Date().getFullYear(), { $year: "$birth_date" }] }
    }}
]);
let currentMonth = new Date().getMonth() + 1;
db.students.find({
    $expr: { $eq: [{ $month: "$birth_date" }, currentMonth] }
});

db.students.aggregate([
    { $lookup: {
        from: "groups",
        localField: "group_id",
        foreignField: "_id",
        as: "group"
    }},
    { $unwind: "$group" },
    { $group: {
        _id: "$group.direction_id",
        count: { $sum: 1 }
    }}
]);

db.groups.aggregate([
    { $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "group_id",
        as: "students"
    }},
    { $unwind: "$students" },
    { $group: {
        _id: { group_number: "$group_number", direction_id: "$direction_id", tuition_type: "$students.tuition_type" },
        count: { $sum: 1 }
    }},
    { $project: {
        group_number: "$_id.group_number",
        direction_id: "$_id.direction_id",
        tuition_type: "$_id.tuition_type",
        count: 1
    }},
    { $sort: { group_number: 1 } }
]);

db.teachers.insertMany([
    { full_name: "Popovich Alexei Kirillovich" },
    { full_name: "Abromovich Vlada Olegovna" },
    { full_name: "Semenovich Stepan Alexeevich" }
]);

db.subjects.insertMany([
    { name: "Philosophy", teacher_id: ObjectId("111"), direction_id: ObjectId("101") },
    { name: "Mathematics", teacher_id: ObjectId("222"), direction_id: ObjectId("201") },
    { name: "Physics", teacher_id: ObjectId("333"), direction_id: ObjectId("301") }
]);

db.subjects.aggregate([
    { $lookup: {
        from: "groups",
        localField: "direction_id",
        foreignField: "direction_id",
        as: "groups"
    }},
    { $unwind: "$groups" },
    { $lookup: {
        from: "teachers",
        localField: "teacher_id",
        foreignField: "_id",
        as: "teacher"
    }},
    { $unwind: "$teacher" },
    { $project: {
        subject_name: "$name",
        group_number: "$groups.group_number",
        teacher_name: "$teacher.full_name"
    }},
    { $sort: { group_number: 1 } }
]);

db.grades.aggregate([
    { $group: {
        _id: "$subject_id",
        count: { $sum: 1 }
    }},
    { $sort: { count: -1 } },
    { $limit: 1 }
]);

db.subjects.aggregate([
    { $lookup: {
        from: "grades",
        localField: "_id",
        foreignField: "subject_id",
        as: "grades"
    }},
    { $unwind: "$grades" },
    { $group: {
        _id: "$teacher_id",
        student_count: { $sum: 1 }
    }},
    { $lookup: {
        from: "teachers",
        localField: "_id",
        foreignField: "_id",
        as: "teacher"
    }},
    { $unwind: "$teacher" },
    { $project: {
        teacher_name: "$teacher.full_name",
        student_count: 1
    }},
    { $sort: { student_count: -1 } }
]);

db.grades.aggregate([
    { $group: {
        _id: "$subject_id",
        total: { $sum: 1 },
        passed: { $sum: { $cond: [{ $gte: ["$grade", 3] }, 1, 0] } }
    }},
    { $project: {
        subject_id: 1,
        pass_rate: { $multiply: [{ $divide: ["$passed", "$total"] }, 100] }
    }},
    { $sort: { pass_rate: -1 } }
]);

db.grades.aggregate([
    { $match: { grade: { $gte: 3 } } },
    { $group: {
        _id: "$subject_id",
        avg_grade: { $avg: "$grade" }
    }},
    { $sort: { avg_grade: -1 } }
]);

db.grades.aggregate([
    { $lookup: {
        from: "students",
        localField: "student_id",
        foreignField: "_id",
        as: "student"
    }},
    { $unwind: "$student" },
    { $group: {
        _id: "$student.group_id",
        avg_grade: { $avg: "$grade" }
    }},
    { $sort: { avg_grade: -1 } },
    { $limit: 1 }
]);

db.grades.aggregate([
    { $group: {
        _id: "$student_id",
        grades: { $push: "$grade" }
    }},
    { $match: { grades: { $not: { $elemMatch: { $lt: 3 } } }, $all: [5] } },
    { $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "student"
    }},
    { $unwind: "$student" },
    { $project: {
        full_name: "$student.full_name"
    }}
]);

db.grades.aggregate([
    { $group: {
        _id: "$student_id",
        failed: { $sum: { $cond: [{ $lt: ["$grade", 3] }, 1, 0] } }
    }},
    { $match: { failed: { $gte: 2 } } },
    { $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "student"
    }},
    { $unwind: "$student" },
    { $project: {
        full_name: "$student.full_name"
    }}
]);

db.schedule.aggregate([
    { $match: { subject_id: ObjectId("...") } },
    { $group: {
        _id: "$subject_id",
        count: { $sum: { $size: "$students_present" } }
    }}
]);

db.schedule.aggregate([
    { $match: { subject_id: ObjectId("...") } },
    { $group: {
        _id: "$subject_id",
        total_classes: { $sum: 1 },
        students_present: { $push: "$students_present" }
    }},
    { $unwind: "$students_present" },
    { $unwind: "$students_present" },
    { $group: {
        _id: { subject_id: "$_id", student: "$students_present" },
        attended_classes: { $sum: 1 }
    }},
    { $group: {
        _id: "$_id.subject_id",
        total_classes: { $first: "$total_classes" },
        attended_classes: { $sum: "$attended_classes" }
    }},
    { $project: {
        subject_id: "$_id",
        missed_classes: { $subtract: ["$total_classes", "$attended_classes"] }
    }}
]);

db.schedule.aggregate([
    { $lookup: {
        from: "subjects",
        localField: "subject_id",
        foreignField: "_id",
        as: "subject"
    }},
    { $unwind: "$subject" },
    { $match: { "subject.teacher_id": ObjectId("...") } },
    { $group: {
        _id: { date: "$date", pair_number: "$pair_number" },
        student_count: { $sum: { $size: "$students_present" } }
    }},
    { $sort: { "_id.date": 1, "_id.pair_number": 1 } }
]);

db.schedule.aggregate([
    { $unwind: "$students_present" },
    { $group: {
        _id: { student: "$students_present", subject_id: "$subject_id" },
        total_time: { $sum: 90 }
    }},
    { $lookup: {
        from: "students",
        localField: "_id.student",
        foreignField: "_id",
        as: "student"
    }},
    { $unwind: "$student" },
    { $lookup: {
        from: "subjects",
        localField: "_id.subject_id",
        foreignField: "_id",
        as: "subject"
    }},
    { $unwind: "$subject" },
    { $project: {
        student_name: "$student.full_name",
        subject_name: "$subject.name",
        total_time: 1
    }},
    { $sort: { student_name: 1, subject_name: 1 } }
]);