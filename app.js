 const studyBuddies = [
            {
                name: "Sarah Johnson",
                university: "MIT",
                subjects: ["Mathematics", "Physics"],
                level: "undergraduate",
                rating: 4.8,
                sessions: 24,
                bio: "Pre-med student passionate about calculus and quantum mechanics"
            },
            {
                name: "Alex Chen",
                university: "Stanford",
                subjects: ["Computer Science", "Mathematics"],
                level: "graduate",
                rating: 4.9,
                sessions: 31,
                bio: "PhD candidate in AI, loves teaching algorithms"
            },
            {
                name: "Maria Rodriguez",
                university: "UC Berkeley",
                subjects: ["Chemistry", "Biology"],
                level: "undergraduate",
                rating: 4.7,
                sessions: 18,
                bio: "Biochemistry major with a knack for organic chemistry"
            },
            {
                name: "David Kim",
                university: "Harvard",
                subjects: ["Literature", "History"],
                level: "graduate",
                rating: 4.6,
                sessions: 22,
                bio: "English lit grad student, specializes in 19th century novels"
            }
        ];

        const studyGroups = [
            {
                name: "Calculus Masters",
                subject: "Mathematics",
                members: 8,
                level: "undergraduate",
                description: "Weekly sessions focusing on differential and integral calculus",
                schedule: "Tuesdays 7 PM"
            },
            {
                name: "Physics Problem Solvers",
                subject: "Physics",
                members: 12,
                level: "undergraduate",
                description: "Collaborative problem-solving for mechanics and thermodynamics",
                schedule: "Thursdays 6 PM"
            },
            {
                name: "Organic Chemistry Study Circle",
                subject: "Chemistry",
                members: 6,
                level: "undergraduate",
                description: "Understanding mechanisms and synthesis pathways",
                schedule: "Sundays 3 PM"
            },
            {
                name: "Data Structures & Algorithms",
                subject: "Computer Science",
                members: 15,
                level: "graduate",
                description: "Advanced algorithms and competitive programming practice",
                schedule: "Wednesdays 8 PM"
            }
        ];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderBuddies();
            renderGroups();
            renderSchedule();
        });

        function renderBuddies() {
            const buddiesList = document.getElementById('buddiesList');
            buddiesList.innerHTML = '';

            studyBuddies.forEach(buddy => {
                const buddyCard = document.createElement('div');
                buddyCard.className = 'buddy-card';
                buddyCard.innerHTML = `
                    <div class="buddy-header">
                        <div class="avatar">${buddy.name.split(' ').map(n => n[0]).join('')}</div>
                        <div class="buddy-info">
                            <h3>${buddy.name}</h3>
                            <p>${buddy.university} • ${buddy.level}</p>
                        </div>
                    </div>
                    <div class="tags">
                        ${buddy.subjects.map(subject => `<span class="tag">${subject}</span>`).join('')}
                    </div>
                    <p>${buddy.bio}</p>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-number">${buddy.rating}</div>
                            <div class="stat-label">Rating</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${buddy.sessions}</div>
                            <div class="stat-label">Sessions</div>
                        </div>
                    </div>
                `;
                buddyCard.addEventListener('click', () => {
                    alert(`Connect with ${buddy.name}? This would normally open a chat or connection request.`);
                });
                buddiesList.appendChild(buddyCard);
            });
        }

        function renderGroups() {
            const groupsList = document.getElementById('groupsList');
            groupsList.innerHTML = '';

            studyGroups.forEach(group => {
                const groupCard = document.createElement('div');
                groupCard.className = 'group-card';
                groupCard.innerHTML = `
                    <div class="group-header">
                        <div class="avatar">${group.name.split(' ').map(n => n[0]).join('')}</div>
                        <div class="group-info">
                            <h3>${group.name}</h3>
                            <p>${group.subject} • ${group.level}</p>
                        </div>
                    </div>
                    <div class="tags">
                        <span class="tag">${group.subject}</span>
                        <span class="tag">${group.members} members</span>
                    </div>
                    <p>${group.description}</p>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-number">${group.members}</div>
                            <div class="stat-label">Members</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${group.schedule}</div>
                            <div class="stat-label">Schedule</div>
                        </div>
                    </div>
                `;
                groupCard.addEventListener('click', () => {
                    alert(`Join ${group.name}? This would normally open the group details or join confirmation.`);
                });
                groupsList.appendChild(groupCard);
            });
        }

        function renderSchedule() {
            const scheduleGrid = document.getElementById('scheduleGrid');
            scheduleGrid.innerHTML = '';

            const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            const times = ['9 AM', '11 AM', '1 PM', '3 PM', '5 PM', '7 PM', '9 PM'];

            days.forEach(day => {
                times.forEach(time => {
                    const slot = document.createElement('div');
                    slot.className = 'day-slot';
                    slot.innerHTML = `<strong>${day}</strong><br>${time}`;
                    slot.addEventListener('click', () => {
                        slot.classList.toggle('selected');
                    });
                    scheduleGrid.appendChild(slot);
                });
            });
        }

        function switchTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        function filterResults() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const subjectFilter = document.getElementById('subjectFilter').value;
            const levelFilter = document.getElementById('levelFilter').value;

            console.log('Filtering:', { searchTerm, subjectFilter, levelFilter });
           
        }

        function openModal() {
            document.getElementById('modal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        // Handle form submission
        document.getElementById('createGroupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('groupName').value,
                subject: document.getElementById('groupSubject').value,
                description: document.getElementById('groupDescription').value,
                level: document.getElementById('groupLevel').value
            };

            console.log('Creating group:', formData);
            alert('Study group created successfully!');
            closeModal();
            
            // Reset form
            this.reset();
        });

        // Chatbot functionality
        const chatResponses = {
            // General questions
            "hello": "Hello! 👋 Welcome to StudyBuddy! I'm here to help you navigate our platform and find the perfect study partners.",
            "hi": "Hi there! 😊 I'm your StudyBuddy assistant. How can I help you today?",
            "help": "I'm here to help! You can ask me about finding study buddies, joining groups, scheduling, account features, or anything else about StudyBuddy.",
            
            // Finding study buddies
            "find study buddies": "To find study buddies: 1) Use the search bar to filter by subject, university, or location 2) Browse through buddy profiles 3) Click on any profile to view details and connect 4) Look for ratings and session counts to find experienced partners! 📚",
            "how to find buddies": "Finding buddies is easy! Use our search filters at the top - you can search by subject (like Math or Physics), academic level (High School, Undergraduate, Graduate), or just type keywords. Click on any buddy card to connect with them!",
            "connect with buddies": "To connect with a study buddy, simply click on their profile card. This will open a connection request where you can introduce yourself and suggest study topics or times to meet!",
            
            // Study groups
            "join study group": "To join a study group: 1) Click on the 'Study Groups' tab 2) Browse available groups or use filters 3) Click on any group card to view details 4) Hit 'Join' to become a member! Most groups have specific meeting times and subjects. 👥",
            "create study group": "Creating a study group is simple! Click the '+' button (floating action button) in the bottom right corner, or go to Study Groups tab and click 'Create Group'. Fill in the group name, subject, description, and academic level. Your group will be visible to other students right away!",
            "study group benefits": "Study groups offer collaborative learning, shared resources, regular study schedules, peer support, and different perspectives on difficult topics. They're perfect for staying motivated and accountable!",
            
            // Scheduling
            "schedule": "Your schedule helps you plan study sessions! Go to the 'My Schedule' tab to see a weekly grid. Click on time slots to mark when you're available for studying. This helps match you with buddies who have similar availability! 📅",
            "how scheduling works": "The scheduling system shows a weekly grid with different time slots. Click on slots when you're free to study - they'll turn blue. Other students can see your availability when they want to schedule study sessions with you!",
            "change schedule": "To update your schedule, go to the 'My Schedule' tab and click on time slots to select or deselect them. Your changes are saved automatically and visible to potential study partners!",
            
            // Features
            "features": "StudyBuddy's main features include: 🔍 Smart search for study partners, 👥 Study group creation and joining, 📅 Scheduling system, ⭐ Rating system for buddies, 🎓 Academic level filtering, 📚 Subject-specific matching, and 💬 Direct messaging (coming soon)!",
            "what can i do": "You can find study buddies by subject and location, join existing study groups, create your own groups, set your study schedule, browse by academic level, rate your study sessions, and connect with like-minded students!",
            "main features": "Our platform offers study buddy matching, group study sessions, schedule coordination, subject-specific search, university-based connections, rating systems, and collaborative learning tools!",
            
            // Account and profile
            "profile": "Your profile shows your academic info, subjects you're studying, university, and study session history. A complete profile helps other students find and connect with you more easily!",
            "rating system": "The rating system helps maintain quality study sessions. After each study session, you can rate your experience from 1-5 stars. Higher-rated buddies appear more prominently in search results!",
            "account": "Your account keeps track of your study sessions, group memberships, schedule, and connections. Make sure to keep your profile updated with current subjects and availability!",
            
            // Technical help
            "not working": "If something's not working, try refreshing the page first. If the problem persists, check your internet connection. For persistent issues, you can contact our support team through the website footer.",
            "bug": "Sorry to hear you're experiencing issues! Please try refreshing the page. If the problem continues, note what you were doing when it happened and contact our support team with details.",
            "technical issue": "For technical issues, first try refreshing the page and clearing your browser cache. If problems persist, our support team can help - look for the contact information in the website footer.",
            
            // Subjects
            "subjects": "We support all major subjects including Mathematics, Physics, Chemistry, Biology, Computer Science, Literature, History, and many more! Use the subject filter to find buddies in your specific area of study.",
            "what subjects": "StudyBuddy covers a wide range of subjects from STEM fields (Math, Science, Engineering) to Liberal Arts (Literature, History, Philosophy) and everything in between. What subject are you studying?",
            
            // Safety and community
            "safety": "StudyBuddy prioritizes your safety! We have rating systems, profile verification, and community guidelines. Always meet in public places for in-person study sessions and report any inappropriate behavior.",
            "community guidelines": "We maintain a respectful learning environment. Be kind, helpful, and professional in all interactions. Share knowledge freely and respect others' time and commitments.",
            
            // Default responses
            "default": [
                "I'm not sure about that specific question, but I'm here to help with StudyBuddy features! Try asking about finding buddies, joining groups, or scheduling.",
                "That's an interesting question! I specialize in helping with StudyBuddy features like study groups, buddy matching, and scheduling. What would you like to know about these?",
                "I might not have the exact answer to that, but I can help you with finding study partners, creating groups, or managing your schedule on StudyBuddy!"
            ]
        };

        function toggleChatbot() {
            const chatWidget = document.getElementById('chatWidget');
            const isVisible = chatWidget.style.display === 'flex';
            chatWidget.style.display = isVisible ? 'none' : 'flex';
            
            if (!isVisible) {
                document.getElementById('chatInput').focus();
            }
        }

        function sendQuickMessage(message) {
            document.getElementById('chatInput').value = message;
            sendMessage();
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Add user message
            addMessage(message, 'user');
            input.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Generate bot response after a short delay
            setTimeout(() => {
                const response = generateResponse(message);
                hideTypingIndicator();
                addMessage(response, 'bot');
            }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
        }

        function addMessage(message, sender) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            const chatMessages = document.getElementById('chatMessages');
            typingIndicator.style.display = 'block';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            typingIndicator.style.display = 'none';
        }

        function generateResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            // Check for exact matches first
            for (const [key, response] of Object.entries(chatResponses)) {
                if (key !== 'default' && lowerMessage.includes(key)) {
                    return response;
                }
            }
            
            // Check for keyword matches
            if (lowerMessage.includes('buddy') || lowerMessage.includes('partner') || lowerMessage.includes('find')) {
                return chatResponses['find study buddies'];
            }
            
            if (lowerMessage.includes('group') && (lowerMessage.includes('join') || lowerMessage.includes('how'))) {
                return chatResponses['join study group'];
            }
            
            if (lowerMessage.includes('group') && lowerMessage.includes('create')) {
                return chatResponses['create study group'];
            }
            
            if (lowerMessage.includes('schedule') || lowerMessage.includes('time') || lowerMessage.includes('calendar')) {
                return chatResponses['schedule'];
            }
            
            if (lowerMessage.includes('rating') || lowerMessage.includes('review')) {
                return chatResponses['rating system'];
            }
            
            if (lowerMessage.includes('subject') || lowerMessage.includes('course')) {
                return chatResponses['subjects'];
            }
            
            if (lowerMessage.includes('safe') || lowerMessage.includes('security')) {
                return chatResponses['safety'];
            }
            
            if (lowerMessage.includes('feature') || lowerMessage.includes('what can')) {
                return chatResponses['features'];
            }
            
            if (lowerMessage.includes('profile') || lowerMessage.includes('account')) {
                return chatResponses['profile'];
            }
            
            if (lowerMessage.includes('not working') || lowerMessage.includes('broken') || lowerMessage.includes('issue')) {
                return chatResponses['not working'];
            }
            
            // Return random default response
            const defaultResponses = chatResponses['default'];
            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        });