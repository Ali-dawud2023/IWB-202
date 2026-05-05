$(function () {
  //  Data Meals
    const meals = [
    {
      id: "SF-001",
      name: "باذنجان مجئجئ باللبن",
      price: "300000",
      details: `
                  <div class="details-content">
                    <div class="details-section">
                    <img src="assets/images/1.jpg" width="200" style="border-radius: 7px; background-size: cover;">
                      <p> <strong> المطبخ:</strong> <span class="details-tag">حلبي</span></p>
                      <p> <strong> تصنيف الطعام: </strong>
                        <span class="details-tag">نباتي</span>
                      </p>
                    </div>
                    <div class="details-section">
                      <h4><img src="assets/Icon/Icon-Vegan-Food.png" width=16 alt="Icon Food" />  المكونات</h4>
                      <ul>
                        <li>باذنجان بلدي مشوي مقلي</li>
                        <li>ثوم وليمون</li>
                      </ul>
                    </div>
                    <div class="details-section">
                    <h4><img src="assets/Icon/Icon-Sauce.png" width=16 alt="Icon Sauce" />  الصلصة</h4>
                      <ul>
                        <li>طحينة</li>
                        <li>لبن</li>
                      </ul>
                    </div>
                  </div>
    `,
    },

    {
      id: "SF-002",
      name: "وجبة فروج مسحب",
      price: "280000",
      details: `
                <div class="details-content">
                    <div class="details-section">
                    <img src="assets/images/2.jpg" width="200" style="border-radius: 7px; background-size: cover;">
                      <p> <strong> المطبخ:</strong> <span class="details-tag">شرقي</span></p>
                      <p> <strong> تصنيف الطعام: </strong>
                        <span class="details-tag">لحوم</span>
                      </p>
                    </div>
                    <div class="details-section">
                      <h4><img src="assets/Icon/Icon-Vegan-Food.png" width="16" alt="Icon Food" />  المكونات</h4>
                      <ul>
                        <li>دجاج</li>
                        <li>بهارات</li>
                      </ul>
                    </div>
                    <div class="details-section">
                    <h4><img src="assets/Icon/Icon-Sauce.png" width=16 alt="Icon Sauce" /> الصلصة</h4>
                      <ul>
                        <li>المايونيز</li>
                        <li>دبس</li>
                      </ul>
                    </div>
                </div>
    `,
    },

    {
      id: "SF-003",
      name: "وجبة مشاوي مشكل",
      price: "750000",
      details: `

                <div class="details-content">
                    <div class="details-section">
                    <img src="assets/images/3.jpg" width="200" style="border-radius: 7px; background-size: cover;">
                      <p> <strong> المطبخ:</strong> <span class="details-tag">شرقي</span></p>
                      <p> <strong> تصنيف الطعام: </strong>
                        <span class="details-tag">لحوم</span>
                      </p>
                    </div>
                    <div class="details-section">
                      <h4><img src="assets/Icon/Icon-Vegan-Food.png" width=16 alt="Icon Food" />  المكونات</h4>
                      <ul>
                        <li>لحم غنم</li>
                        <li>بهارات</li>
		                <li>سلطة</li>
                      </ul>
                    </div>
                </div>
    `,
    },

    {
      id: "SF-004",
      name: "وجبة برغر لحم",
      price: "100000",
      details: `
                <div class="details-content">
                    <div class="details-section">
                    <img src="assets/images/4.jpg" width="200" style="border-radius: 7px; background-size: cover;">
                      <p> <strong> المطبخ:</strong> <span class="details-tag">غربي</span></p>
                      <p> <strong> تصنيف الطعام: </strong>
                        <span class="details-tag">ساندويش</span>
                      </p>
                    </div>
                    <div class="details-section">
                      <h4><img src="assets/Icon/Icon-Vegan-Food.png" width=16 alt="Icon Food" />  المكونات</h4>
                      <ul>
                        <li>لحم</li>
                        <li>خبز</li>
                        <li>جبنة</li>
                      </ul>
                    </div>
                </div>
    `,
    },

    {
      id: "SF-005",
      name: "شاكرية",
      price: "150000",
      details: `
                <div class="details-content">
                    <div class="details-section">
                    <img src="assets/images/5.jpg" width="200" style="border-radius: 7px; background-size: cover;">
                      <p> <strong> المطبخ:</strong> <span class="details-tag">شرقي</span></p>
                      <p> <strong> تصنيف الطعام: </strong>
                        <span class="details-tag">وجبات محلية </span>
                      </p>
                    </div>
                    <div class="details-section">
                      <h4><img src="assets/Icon/Icon-Vegan-Food.png" width=16 alt="Icon Food" />  المكونات</h4>
                      <ul>
                        <li>لحم خاروف</li>
                        <li>لبن</li>
                        <li>مكسرات</li>
                      </ul>
                    </div>
                </div>
    `,
    },
  ];

  // loop Item Table Meals
  function renderTable() {
    const tbody = $("#mealsTable tbody");
    tbody.empty();

    meals.forEach((m) => {
      // Item Meals
      const row = $(`
            <tr>
                <td><span class="meal-code">${m.id}</span></td>
                <td class="meal-name">${m.name}</td>
                <td class="meal-price">${m.price} ل.س</td>
                <td>
                  <button class="btn-details toggle-details" data-id="${m.id}">
                    إظهار التفاصيل
                  </button>
                </td>
                <td>
                  <input type="checkbox" class="meal-checkbox" />
                </td>
            </tr>
            `);

      // Details Meals
      const detailsRow = $(`
        <tr class="details-row" data-id="${m.id}" style="display:none;">
          <td  colspan="5">
            ${m.details}
          </td>
        </tr>
      `);

      tbody.append(row);
      tbody.append(detailsRow);
    });
  }

  //  Button Details Meals
    $("#mealsTable").on("click", ".toggle-details", function () {
    const id = $(this).data("id");
    const row = $('.details-row[data-id="' + id + '"]');

    row.toggle();
  });

  // زر المتابعة
  $("#continueBtn").click(function () {
    // التأكد من اختيار وجبة
    if ($('#mealsTable input[type="checkbox"]:checked').length === 0) {
      alert("يجب اختيار وجبة واحدة على الأقل");
      return;
    }

    $("#orderForm").show(); // اظهار الفورم
  });

  //  فورم الارسال
  $("#myForm").submit(function (e) {
    e.preventDefault();

    const name = $("#fullName").val();
    const nid = $("#nationalId").val();
    const birth = $("#birthDate").val();
    const mobile = $("#mobile").val();
    const email = $("#email").val();

    // نتحقق انو الاسم عربي
    if (!/^[\u0600-\u06FF\s]+$/.test(name)) {
      alert("الاسم يجب أن يكون عربي");
      return;
    }

    // الرقم الوطني
    if (!/^\d{11}$/.test(nid)) {
      alert("الرقم الوطني يجب أن يكون 11 رقم");
      return;
    }

    // التاريخ
    if (!/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(birth)) {
      alert("تاريخ غير صحيح");
      return;
    }

    // الموبايل
    if (!/^09\d{8}$/.test(mobile)) {
      alert("رقم الموبايل غير صحيح");
      return;
    }

    // الايميل
    if (!/.+@.+\..+/.test(email)) {
      alert("الإيميل غير صحيح");
      return;
    }

    //  حساب المجموع
    let total = 0;
    let details = "";

    $("#mealsTable tbody tr").each(function () {
      const checkbox = $(this).find('input[type="checkbox"]');

      if (checkbox.length && checkbox.is(":checked")) {
        const tds = $(this).find("td");

        const mealName = tds.eq(1).text();
        const price = parseInt(tds.eq(2).text());

        total += price;

        details += mealName + " - " + price + "<br>";
      }
    });

    // حسم الضريبة
    const discount = total * 0.05;
    const finalTotal = total - discount;

    //  اصدار الفاتورة برسالة منبثقة
    let message =
      "تفاصيل الطلب:\n" +
      details.replace(/<br>/g, "\n") +
      "\n" +
      "----------------------\n" +
      "المجموع: " +
      total +
      "\n" +
      "الحسم الضريبي 5%: " +
      discount +
      "\n" +
      "الإجمالي: " +
      finalTotal;

    alert(message);
  });

  renderTable();
  // Initial operation because they made the table dynamic (I hate JavaScript ¯\_(ツ)_/¯)
  //Abdulrahman
});

