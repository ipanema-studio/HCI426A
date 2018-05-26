inlets = 1;

var screen_mess = [
	'hide_main',
	'hide_workstation',
	'hide_cookbook',
	'hide_genre',
	'hide_edm',
	'hide_trance',
	'hide_house',
	'hide_dnb',
	'hide_dubstep',
	'hide_sound_basics',
	'hide_frequency',
	'hide_amplitude',
	'hide_phase',
	'hide_bass_mid_treble',
	'hide_audio_effects',
	'hide_building_blocks',
	'hide_beats',
	'hide_chords',
	'hide_notes',
	'hide_layering',
	'hide_composition'
];

function hide_all() {
	screen_mess.forEach(function(item, index, array){
		messnamed(item, 1);
	});
}

function screen_main() {
	hide_all();
	messnamed(screen_mess[0], 0);
	messnamed("hide_main_title", 0);
	messnamed("hide_left_title", 1);
}

function screen_cookbook() {
	hide_all();
	messnamed(screen_mess[2], 0);
	messnamed("title", "Electronica Cookbook");
	messnamed("hide_main_title", 1);
	messnamed("hide_left_title", 0);
}

function screen_genre() {
	hide_all();
	messnamed(screen_mess[3], 0);
	messnamed("title", "Genre");
}

function screen_edm() {
	hide_all();
	messnamed(screen_mess[4], 0);
	messnamed("title", "EDM");
}

function screen_sound_basics() {
	hide_all();
	messnamed(screen_mess[9], 0);
	messnamed("title", "Sound Basics");
}

function screen_frequency() {
	hide_all();
	messnamed(screen_mess[10], 0);
	messnamed("title", "Frequency");
}

function screen_amplitude() {
	hide_all();
	messnamed(screen_mess[11], 0);
	messnamed("title", "Amplitude");
}

function screen_phase() {
	hide_all();
	messnamed(screen_mess[12], 0);
	messnamed("title", "Phase");
}

function screen_bass_mid_treble() {
	hide_all();
	messnamed(screen_mess[13], 0);
	messnamed("title", "Bass-Mid-Treble");
}

function screen_audio_effects() {
	hide_all();
	messnamed(screen_mess[14], 0);
	messnamed("title", "Audio Effects");
}

function screen_building_blocks() {
	hide_all();
	messnamed(screen_mess[15], 0);
	messnamed("title", "Building Blocks");
}

function screen_beats() {
	hide_all();
	messnamed(screen_mess[16], 0);
	messnamed("title", "Beats");
}

function screen_chords() {
	hide_all();
	messnamed(screen_mess[17], 0);
	messnamed("title", "Chords");
}

function screen_notes() {
	hide_all();
	messnamed(screen_mess[18], 0);
	messnamed("title", "Notes");
}