**Work Tasks**

- **Learning Projects**
- [ ] Calculate audio dB level in HTML5
- [ ] Convert byte range to decibel range
- Learn about FFT concepts
- If analyzer.fftSize = 1024, analyser.getByteFrequencyData returns a normalized array of 512 values between 0 and 255
- Unsigned array means there's no data i it yet. It's just 512 zeros.
- getByteFrequencyData copies the current audio data to the array it gets passed-in

- [ ] Invert b[k] = ( 255 / (dBmax - dBmin) ) * (Y[k] - dBmin) to isolate Y[k]

- [ ] If dataArray returns decibels, invert the formula to get the sound pressure, and then apply the sound pressure back against the smallest pressure a human can hear to get decibels according to the "absolute" scale.
- [ ] 60 dB seems to occur around 150 bytes at .5 volume, notice the increment by which the bytes are doubles against the volume, and use that in relation to how many decibels doubles sound pressure.
- [ ] Discover what unit the byte range is passing back -- it obviously represents sound pressure
- [ ]  Can I use SQL with Python instead of PHP?
- [ ] Create a loop that doesn't change values, but averages updated values. Have a job step of 1.
- [ ] Can I somehow access the byte data for a non current point?

- **Kinetic**  **Typography**
- [ ] Add music, adjust volume, and render FLP to MP3 or WAV file
- [ ] Choose background for "The Simple Gospel" and "If Ye Love Me"
- [ ] Create jam explaining parable of the sower (keep to under 6 minutes!!!)

- **Audio Features**
- [ ] Play with space bar
- [ ] Set mejs-horizontal-volume-input default value to 70dB
- Get the average or highest dB value of an audio file with JavaScript
- ( 70bd / muAudio.dB ) * input.max
- [ ] Show dB value bubble on volume hover
- [ ] Partially download a file with JavaScript
- [ ] Render audio waveform in JavaScript (Like LL command in AE, or FL Studio waveform)

**Daily Tasks**

- [X] Take care of moms computer virus (ended up being phishing on an Google ad for the Wal-Mart site)
- [X] Provide mom with sources proving Billy Graham is a false prophet to vindicate Steven Anderson
- [X] Begin essay on why God hates depending on works for salvation
- [ ] Tailor green shirt