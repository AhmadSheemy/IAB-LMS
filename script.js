document.addEventListener('DOMContentLoaded', () => {
    
    // ***************************************************************
    // *** الكود الجديد: إعادة التوجيه إلى الصفحة الرئيسية عند التحديث ***
    // ***************************************************************
    
    // التحقق مما إذا كانت الصفحة قد تم تحميلها نتيجة للتحديث (Reload)
    // قيمة 1 تعني NAVIGATION_TYPE_RELOAD
    if (performance.navigation.type === 1) {
        // إعادة التوجيه إلى index.html
        window.location.href = 'index.html';
        return; // إيقاف تنفيذ باقي الكود الخاص بهذه الصفحة (الخريطة أو الفيديو)
    }

    // ***************************************************************
    
    // 1. محاولة فورية للتمرير (مفيدة لمعظم المتصفحات)
    window.scrollTo(0, 0); 
    
    // 2. محاولة قسرية بعد تأخير (للتغلب على خاصية استعادة التمرير التلقائي للمتصفح)
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }, 50);

    // ... باقي الكود الخاص بالخريطة والفيديوهات كما هو ...
    // *****************************************************************
    // *** محرك الخرائط (يشتغل فقط إذا كان العنصر #map موجوداً) ***
    // *****************************************************************
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // 1. Create the map and set its initial center and zoom level
        const map = L.map('map', {
            dragging: false,       // يوقف سحب الخريطة بالماوس
            zoomControl: false,    // يوقف أزرار الزووم (+ و -)
            scrollWheelZoom: false, // يوقف الزووم ببكرة الماوس
            doubleClickZoom: false, // يوقف الزووم بالنقر المزدوج
            boxZoom: false,        // يوقف الزووم عن طريق سحب مربع بالماوس
            keyboard: false,       // يوقف التحكم بالخريطة عن طريق لوحة المفاتيح
            tap: false,            // يوقف التفاعل باللمس
            touchZoom: false,      // يوقف الزووم باللمس
        }).setView([26.9206, 26.8025], 6); // [Latitude, Longitude], initial zoom level for Egypt

        // 2. Add the base map layer (tiles)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd'
        }).addTo(map);

        // 3. Define airport data (البيانات التي تم إرسالها سابقاً)
        const airports = [
            {
                name: "CAI",
                lat: 30.1118,
                lng: 31.3995,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    },
                    {
                        name: "Mr. Mahmoud Adel",
                        title: "Senior Station Traffic Agent",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/1482.jpg"
                    },
                    {
                        name: "Mr. Ahmed Hany",
                        title: "Station Traffic Team Leader",
                        functions: "<ul><li>CRANE C/I</li></ul>",
                        image: "Images/1437.jpg"
                    },
                    {
                        name: "Mr. Ramy El-Tamemy",
                        title: "Security Representative Supervisor",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/385.jpg"
                    }
                ]
            },
            {
                name: "SPX",
                lat: 30.0760,
                lng: 30.9160,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    }
                ]
            },
            {
                name: "HBE",
                lat: 30.9200,
                lng: 29.6950,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    },
                    {
                        name: "Mr. Karim Hamdy",
                        title: "Station Duty Officer",
                        functions: "<ul><li>Load Control</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/592.jpg"
                    }
                ]
            },
            {
                name: "SSH",
                lat: 27.9774,
                lng: 34.3945,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    },
                    {
                        name: "Mr. Moustafa Fouad",
                        title: "Station Duty Officer",
                        functions: "<ul><li>ASTRA</li><li>iPort</li></ul>",
                        image: "Images/128.jpg"
                    },
                    {
                        name: "Mr. Moustafa Sabry",
                        title: "Senior Station Traffic Supervisor",
                        functions: "<ul><li>ALTEA CM</li></ul>",
                        image: "Images/642.jpg"
                    }
                ]
            },
            {
                name: "HRG",
                lat: 27.1770,
                lng: 33.7990,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Bahgat",
                        title: "Senior Station Traffic Supervisor",
                        functions: "<ul><li>ASTRA</li><li>Go-Now</li></ul>",
                        image: "Images/274.jpg"
                    },
                    {
                        name: "Mr. Ahmed Youssef",
                        title: "Station Traffic Team Leader",
                        functions: "<ul><li>Go-Now</li></ul>",
                        image: "Images/322.jpg"
                    },
                    {
                        name: "Ms. Zeinab Okail",
                        title: "Station Traffic Team Leader",
                        functions: "<ul><li>ASTRA</li><li>Go-Now</li><li>Schengen</li></ul>",
                        image: "Images/580.jpeg"
                    }
                ]
            },
            {
                name: "LXR",
                lat: 25.6720,
                lng: 32.7030,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    }
                ]
            },
            {
                name: "HMB",
                lat: 26.3392,
                lng: 31.7378,
                trainers: [
                    {
                        name: "Mr. Sherif Mansour",
                        title: "Quality & Safety Director",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>iPort</li><li>ALTEA CM/FM CLC</li></ul>",
                        image: "Images/138.jpg"
                    },
                    {
                        name: "Mr. Mahmoud Abdelfattah",
                        title: "Operations & Security Director",
                        functions: "<ul><li>Security</li></ul>",
                        image: "Images/10.jpeg"
                    },
                    {
                        name: "Mr. Mohamed Arafa",
                        title: "Stations General Manager",
                        functions: "<ul><li>Ramp</li></ul>",
                        image: "Images/17.jpg"
                    },
                    {
                        name: "Eng. Khaled Nour",
                        title: "Training Manager",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Load Control</li><li>SMS</li><li>SABRE</li><li>ALTEA CM</li></ul>",
                        image: "Images/572.jpeg"
                    },
                    {
                        name: "Eng. Mohamed Yousef",
                        title: "Training Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>SMS</li><li>iPort</li><li>ALTEA CM</li><li>CRANE</li></ul>",
                        image: "Images/847.jpg"
                    },
                    {
                        name: "Mr. Ahmad Abdalla",
                        title: "Quality Supervisor",
                        functions: "<ul><li>Passenger</li><li>Ramp</li><li>Baggage Service & World Tracer</li><li>iPort</li></ul>",
                        image: "Images/1754.jpeg"
                    }
                ]
            }
        ];

        // Custom Marker Icon
        const customMarkerIcon = L.icon({
            iconUrl: 'Images/airplane_icon.png', 
            iconRetinaUrl: 'Images/airplane_icon.png', 
            iconSize: [20, 20], 
            iconAnchor: [16, 16], 
            popupAnchor: [0, -32]  
        });

        // 4. Add markers for airports and handle popup visibility on hover
        airports.forEach(airport => {
            const marker = L.marker([airport.lat, airport.lng], { icon: customMarkerIcon }).addTo(map);

            let tableRows = '';
            airport.trainers.forEach(trainer => {
                tableRows += `
                    <tr>
                        <td>${trainer.name}</td>
                        <td><strong>${trainer.title}</strong></td>
                        <td>${trainer.functions}</td>
                        <td><img src="${trainer.image}" alt="${trainer.name}" class="popup-img"></td>
                    </tr>
                `;
            });

            const popupContent = `
                <h3>${airport.name} Station Trainers</h3>
                <table class="airport-info-table">
                    <thead>
                        <tr>
                            <th>TRAINER NAME</th>
                            <th>TITLE</th>
                            <th>FUNCTIONS</th>
                            <th>IMAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            `;

            const popup = L.popup({
                closeButton: false,
                autoClose: false,
                className: 'custom-popup',
                maxWidth: 490,
                offset: L.point(0,0), 
                autoPan: false, 
                autoPanPadding: L.point(20, 20)
            }).setContent(popupContent);

            marker.bindPopup(popup);
            marker.linkedPopup = popup;
            let isMouseOverPopup = false;

            marker.on('mouseover', function(e) {
                if (!this.linkedPopup.isOpen()) {
                    this.openPopup();
                }
            });

            marker.on('mouseout', function(e) {
                setTimeout(() => {
                    if (!isMouseOverPopup) {
                        this.closePopup();
                    }
                }, 200);
            });

            popup.on('add', function() {
                const popupDomElement = popup.getElement();
                if (popupDomElement) {
                    popupDomElement.addEventListener('mouseover', () => {
                        isMouseOverPopup = true;
                    });
                    popupDomElement.addEventListener('mouseout', () => {
                        isMouseOverPopup = false;
                        setTimeout(() => {
                            if (!isMouseOverPopup) {
                                marker.closePopup();
                            }
                        }, 200);
                    });
                }
            });
        });
    } // End of mapElement check


    // *****************************************************************
    // *** محرك الفيديوهات (يشتغل فقط إذا كان العنصر #video-links موجوداً) ***
    // *****************************************************************
    const videoLinksContainer = document.getElementById('video-links');
    if (videoLinksContainer) {
        const videoDisplay = document.getElementById('video-display');
        const videoMessage = document.getElementById('video-message');
        const currentVideoTitle = document.getElementById('current-video-title');
        const baseVideoPath = 'Videos/'; 

        const videoTopics = {
            "Passengers Service": [
                { name: "Passengers Service - Part 1", file: "Passenger Service P1.mp4" },
                { name: "Passengers Service - Part 2", file: "Passenger Service P2.mp4" },
                { name: "Passengers Service - Part 3", file: "Passenger Service P3.mp4" },
            ],
            "Schengen Visa": [
                { name: "Schengen Visa & Travel Documents - Part 1", file: "Schengen Visa P1.mp4" },
                { name: "Schengen Visa & Travel Documents - Part 2", file: "Schengen Visa P2.mp4" },
            ],
            "Lost & Found": [
                { name: "Lost & Found", file: "lost and found training(1).mp4" },
            ],
            "Turnaround Coordination": [
            ],
            "Load Control": [
            ],
            "SMS": [
                { name: "Safety Management System - Part 1", file: "IAB SMS P1.mp4" },
                { name: "Safety Management System - Part 2", file: "IAB SMS P2.mp4" },
            ]
        };

        // وظيفة لعرض الفيديو وتشغيله تلقائيًا
        function displayVideo(videoFile, videoName, topicFolder) {
            const fullPath = baseVideoPath + topicFolder + '/' + videoFile;
            
            currentVideoTitle.textContent = `${videoName}`; 
            currentVideoTitle.style.display = 'block';

            videoMessage.style.display = 'none';

            videoDisplay.src = fullPath;
            videoDisplay.load(); 
            videoDisplay.style.display = 'block';

            videoDisplay.play().catch(error => {
                console.error("Error attempting to play video:", error);
            });
        }

        // إنشاء أقسام التوبيكات وأزرار الروابط في الواجهة
        for (const topic in videoTopics) {
            if (videoTopics.hasOwnProperty(topic)) {
                
                const topicContainer = document.createElement('div');
                topicContainer.className = 'topic-header-container';
                
                const topicHeader = document.createElement('h3');
                topicHeader.textContent = topic;
                topicHeader.className = 'topic-header';
                topicContainer.appendChild(topicHeader);
                
                const dropdownContent = document.createElement('div');
                dropdownContent.className = 'dropdown-content';
                
                videoTopics[topic].forEach(video => {
                    const button = document.createElement('button');
                    button.className = 'video-link-btn';
                    button.textContent = video.name;
                    
                    button.addEventListener('click', () => {
                        displayVideo(video.file, video.name, topic); 
                    });

                    dropdownContent.appendChild(button);
                });

                topicContainer.appendChild(dropdownContent);
                videoLinksContainer.appendChild(topicContainer);
            }
        }

        // إجراء لمنع النقر بالزر الأيمن على مشغل الفيديو
        videoDisplay.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    } // End of videoLinksContainer check
});