const loginScreen = document.getElementById('login-screen');
        const loginButton = document.getElementById('login-button');
        const passwordInput = document.getElementById('password-input');

        // Set a simple password for demo purposes
        const correctPassword = "kiyaacantik"; // You can change this to any password you want

        loginButton.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });

        function checkPassword() {
            const enteredPassword = passwordInput.value;
            if (enteredPassword === correctPassword) {
                loginScreen.style.opacity = "0";
                setTimeout(() => {
                    loginScreen.style.display = "none";
                    // Auto play music when page loads after login
                    playMusic();
                    function showRibbons() {
                        const ribbons = document.querySelector('.falling-ribbons');
                        ribbons.style.display = 'block';
                    }
                    
                    // Panggil fungsi ini setelah login berhasil
                    setTimeout(showRibbons, 1000); // Tampilkan pita setelah 1 detik
                }, 800);
            } else {
                passwordInput.value = "";
                passwordInput.placeholder = "Yg bisa buka cuma kiyaa!";
                passwordInput.style.borderColor = "#ff4081";
                setTimeout(() => {
                    passwordInput.placeholder = "Password";
                    passwordInput.style.borderColor = "#ffc0cb";
                }, 2000);
            }
        }

        function showRibbons() {
            const ribbons = document.querySelector('.falling-ribbons');
            ribbons.style.display = 'block';
        }

        // Music Player
        const songs = [
            { title: "Daniel caesar - Toronto 2014", url: "/utama/audio/Daniel Caesar Toronto 2014 Official Music Video.mp3" },
            { title: "Daniel Caesar - Get You", url: "/utama/audio/Daniel Caesar Get You Lyrics ft.Kali Uchis.mp3" },
            { title: "Daniel Caesar - Ocho Rios", url: "/utama/audio/Daniel Caesar Ocho Rios Official Audio.mp3" },
            { title: "Daniel Caesar - Super Powers", url: "/utama/audio/Daniel Caesar Superpowers.mp3" },
            { title: "Daniel Caesar - Hold Me Down", url: "/utama/audio/Hold Me Down.mp3" }
        ];

        const audioPlayer = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        const prevSongBtn = document.getElementById('prev-song');
        const nextSongBtn = document.getElementById('next-song');
        const songTitle = document.getElementById('song-title');
        let currentSongIndex = 0;
        let isPlaying = false;

        function updateSongInfo() {
            songTitle.textContent = songs[currentSongIndex].title;
            audioPlayer.src = songs[currentSongIndex].url;
        }

        function togglePlay() {
            if (isPlaying) {
                audioPlayer.pause();
                playBtn.innerHTML = '&#9658;'; // play symbol
            } else {
                audioPlayer.play();
                playBtn.innerHTML = '&#10074;&#10074;'; // pause symbol
            }
            isPlaying = !isPlaying;
        }

        function playMusic() {
            if (!isPlaying) {
                togglePlay(); // Start playing music
            }
        }

        function nextSong() {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            updateSongInfo();
            if (isPlaying) {
                audioPlayer.play();
            }
        }

        function prevSong() {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            updateSongInfo();
            if (isPlaying) {
                audioPlayer.play();
            }
        }

        playBtn.addEventListener('click', togglePlay);
        nextSongBtn.addEventListener('click', nextSong);
        prevSongBtn.addEventListener('click', prevSong);

        // Initialize song info
        updateSongInfo();

        // Gallery Lightbox
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeLightbox = document.getElementById('close-lightbox');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentImageIndex = 0;

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentImageIndex = index;
                const imgSrc = item.querySelector('img').src;
                const caption = item.getAttribute('data-caption');
                lightboxImage.src = imgSrc;
                lightboxCaption.textContent = caption;
                lightbox.style.display = 'flex';
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
            const imgSrc = galleryItems[currentImageIndex].querySelector('img').src;
            const caption = galleryItems[currentImageIndex].getAttribute('data-caption');
            lightboxImage.src = imgSrc;
            lightboxCaption.textContent = caption;
        }

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
            const imgSrc = galleryItems[currentImageIndex].querySelector('img').src;
            const caption = galleryItems[currentImageIndex].getAttribute('data-caption');
            lightboxImage.src = imgSrc;
            lightboxCaption.textContent = caption;
        }

        // Tambahkan event listener untuk tombol navigasi
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);